import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../registration/user.service";

@Component({
  selector: 'app-user-consult',
  templateUrl: './user-consult.component.html',
  styleUrls: ['./user-consult.component.css']
})
export class UserConsultComponent implements OnInit {
  @Input() user: User
  constructor(private userService: UserService) { }

  submitted = false;
  readonly = true;

  ngOnInit() {
    this.userService.getLoggedUser().subscribe(
      (user: any) => {
        this.user = new User(user.id, null, user.firstName, user.lastName, user.phoneNumber);
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    this.userService.registerUser(this.user).subscribe(
      () => {
        this.readonly = true;
      }
    );
  }
}
