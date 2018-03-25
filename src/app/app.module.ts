import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';

import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    LoginFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
