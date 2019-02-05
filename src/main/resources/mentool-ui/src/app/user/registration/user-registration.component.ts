import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {UserRegistrationService} from "./user-registration.service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  model = new User(
    '', '', '', '', ''
  );

  submitted = false;
  readonly = false;

  onSubmit() {
    this.submitted = true;
    this.userRegistration.registerUser(this.model).subscribe(
      () => {
        this.readonly = true;
      },
      () => {
        console.log('There was a problem saving the user')
      }
    )
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  constructor(private userRegistration: UserRegistrationService) {
  }

  ngOnInit() {
  }

}
