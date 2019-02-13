import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthoritiesComponent} from "./authorities/authorities.component";
import {AuthGuardService} from "./login/auth-guard.service";
import {UserRegistrationComponent} from "./user/registration/user-registration.component";
import {UserConsultComponent} from "./user/consult/user-consult.component";
import {TrainingSearchComponent} from "./training/training-search.component";
import {MentorComponent} from "./mentor/mentor.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'user-registration', component: UserRegistrationComponent},
  { path: 'authorities', component: AuthoritiesComponent, canActivate: [AuthGuardService]},
  { path: 'user-profile', component: UserConsultComponent, canActivate: [AuthGuardService]},
  { path: 'mentor/:mode', component: MentorComponent},
  { path: 'training-search', component: TrainingSearchComponent},
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
