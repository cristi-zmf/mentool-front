import {Component, OnInit} from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  model = new User(
    "test@test.com", "test", 'Donald', 'Duck', '0724123456'
  );

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }

  ngOnInit() {
  }

}
