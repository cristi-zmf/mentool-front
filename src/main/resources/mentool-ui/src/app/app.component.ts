import {Component} from '@angular/core';
import {CurrentUserService} from "./login/current-user.service";
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'mentool-ui';
  private isLoggedIn : boolean;

  constructor(private loginService: LoginService, private currentUser: CurrentUserService) {
    this.isLoggedIn = this.currentUser.isAuthenticated();
    this.loginService.watchLogin().subscribe(
      () => {
        this.isLoggedIn = this.currentUser.isAuthenticated();
      }
    )
  }

  logout() {
    this.loginService.logout();
  }
}
