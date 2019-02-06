import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CurrentUserService} from "../../login/current-user.service";

@Injectable({
  providedIn: 'root'
})
export class UserService implements Resolve<User>{
  apiPrefix = 'api/users';
  constructor(private httpClient: HttpClient, private currentUser: CurrentUserService) {}
  registerUser(user: User): Observable<string> {
    return this.httpClient.post(this.apiPrefix, user, {responseType: "text"})
  }

  getUser(email: string): Observable<User> {
    return this.httpClient.get(this.apiPrefix + `/${email}`);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.getUser(this.currentUser.getCurrentUser().username);
  }
}
