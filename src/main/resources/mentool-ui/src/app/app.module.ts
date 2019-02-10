import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRippleModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthoritiesComponent} from './authorities/authorities.component';
import {JwtInterceptorService} from "./jwt-interceptor.service";
import {UserRegistrationComponent} from './user/registration/user-registration.component';
import {UserConsultComponent} from './user/consult/user-consult.component';
import {TrainingSearchComponent} from './training/training-search.component';
import {SkillPickerComponent} from './skill/skill-picker.component';
import {ToastrHttpInterceptorService} from "./toastr-http-interceptor.service";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthoritiesComponent,
    UserRegistrationComponent,
    UserConsultComponent,
    TrainingSearchComponent,
    SkillPickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatMenuModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ToastrHttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
