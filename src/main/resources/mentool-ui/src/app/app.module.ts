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
  MatMenuModule, MatPaginatorModule,
  MatRippleModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthoritiesComponent} from './authorities/authorities.component';
import {JwtInterceptorService} from "./jwt-interceptor.service";
import {UserRegistrationComponent} from './user/registration/user-registration.component';
import { UserConsultComponent } from './user/consult/user-consult.component';
import { TrainingSearchComponent } from './training/training-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthoritiesComponent,
    UserRegistrationComponent,
    UserConsultComponent,
    TrainingSearchComponent
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
    MatMenuModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
