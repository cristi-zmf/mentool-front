import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatMenuModule, MatNavList,
  MatRippleModule,
  MatTableModule
} from '@angular/material';
import {UserComponent} from './user/user.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { AuthoritiesComponent } from './authorities/authorities.component';
import {JwtInterceptorService} from "./jwt-interceptor.service";
import {ROUTER_PROVIDERS} from "@angular/router/src/router_module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


const routes = [
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},
  { path: 'authorities', component: AuthoritiesComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AuthoritiesComponent
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
