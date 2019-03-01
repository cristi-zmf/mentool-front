import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthoritiesComponent} from './authorities/authorities.component';
import {JwtInterceptorService} from "./jwt-interceptor.service";
import {UserRegistrationComponent} from './user/registration/user-registration.component';
import {UserConsultComponent} from './user/consult/user-consult.component';
import {TrainingSearchComponent} from './training/training-search.component';
import {SkillPickerComponent} from './skill/skill-picker.component';
import {ToastrHttpInterceptorService} from "./toastr-http-interceptor.service";
import {ToastrModule} from "ngx-toastr";
import {DatepickerComponent} from './datepicker/datepicker.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MentorComponent } from './mentor/mentor.component';
import { RequiredComponent } from './shared/required.component';
import {NgxPermissionsModule} from "ngx-permissions";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthoritiesComponent,
    UserRegistrationComponent,
    UserConsultComponent,
    TrainingSearchComponent,
    SkillPickerComponent,
    DatepickerComponent,
    MentorComponent,
    RequiredComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatMenuModule,
    ToastrModule.forRoot(),
    NgxPermissionsModule.forRoot(),
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
