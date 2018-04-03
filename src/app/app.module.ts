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
import {GovInvoicesComponent} from './components/gov-invoices/gov-invoices.component';
import {UserInvoicesComponent} from './components/user-invoices/user-invoices.component';
import {StatusIconComponent} from './components/status-icon/status-icon.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {InvoicePageComponent} from './pages/invoice-page/invoice-page.component';
import {InvoiceService} from './services/invoice.service';
import { GovInvoiceComponent } from './components/gov-invoice/gov-invoice.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
	TranslateModule, TranslateLoader,
	TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
	{
		path: 'facturen',
		component: HomePageComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'facturen/:id',
		component: InvoicePageComponent,
		canActivate: [AuthGuardService]
	},
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		LoginPageComponent,
		LoginFormComponent,
		HomePageComponent,
		GovInvoicesComponent,
		UserInvoicesComponent,
		StatusIconComponent,
		InvoicePageComponent,
		GovInvoiceComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes
		),
		HttpModule,
		AngularFontAwesomeModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	providers: [
		AuthGuardService,
		AuthService,
		CookieService,
		InvoiceService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}
