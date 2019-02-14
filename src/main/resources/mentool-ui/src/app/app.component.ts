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
  private role: string;
  private userAddress: string;
  private mentorViewUrl: string;
  private personProfileUrl: string;

  constructor(private loginService: LoginService, private currentUserService: CurrentUserService) {
    this.isLoggedIn = this.currentUserService.isAuthenticated();
    this.loginService.watchLogin().subscribe(
      () => {
        console.log("intram pe schimbarea de logare");
        this.isLoggedIn = this.currentUserService.isAuthenticated();
        this.handleLogin();
      }
    )
  }

  private handleLogin() {
    if (this.isLoggedIn) {
      const authenticatedUser = this.currentUserService.getCurrentUser();
      this.role = authenticatedUser.role.toString();
      this.userAddress = authenticatedUser.username;
      this.setProfileRoute();
    }
  }

  private setProfileRoute() {
    switch (this.role) {
      case 'USER': {
        this.personProfileUrl = `user-profile`;
        break;
      }
      case 'MENTOR': {
        this.personProfileUrl = `/mentor/view/${this.userAddress}`;
        break;
      }
    }
  }

  logout() {
    this.loginService.logout();
  }
}
