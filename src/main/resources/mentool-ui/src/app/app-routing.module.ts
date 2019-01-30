import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";
import {AuthoritiesComponent} from "./authorities/authorities.component";
import {AuthGuardService} from "./login/auth-guard.service";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuardService]},
  { path: 'authorities', component: AuthoritiesComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, { enableTracing: true, useHash: true} // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
