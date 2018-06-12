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
import {GovInvoiceComponent} from './components/gov-invoice/gov-invoice.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {
	TranslateModule, TranslateLoader,
	TranslateService
} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {UserInvoiceComponent} from './components/user-invoice/user-invoice.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import {OwnershipService} from './services/ownership.service';
import { OwnershipComponent } from './components/ownership/ownership.component';
import { CarPageComponent } from './pages/car-page/car-page.component';

import { StompConfig, StompService } from '@stomp/ng2-stompjs';
import { GenerateInvoicePageComponent } from './pages/generate-invoice-page/generate-invoice-page.component';
import { GenerateInvoicesComponent } from './components/generate-invoices/generate-invoices.component';
import { GovCarsComponent } from './components/gov-cars/gov-cars.component';
import { GovCarComponent } from './components/gov-car/gov-car.component';
import {FormsModule} from "@angular/forms";


const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginPageComponent
	},
	{
		path: 'register',
		component: RegisterPageComponent
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
	{
		path: 'cars',
		component: CarsPageComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'cars/:id',
		component: CarPageComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'generate/invoices',
		component: GenerateInvoicePageComponent,
		canActivate: [AuthGuardService]
	}
];

const stompConfig: StompConfig = {
	url: 'ws://teunwillems.nl:15674/ws',
	debug: true,
	headers: {
		login: 'guest',
		password: 'guest'
	},
	// How often to heartbeat?
	// Interval in milliseconds, set to 0 to disable
	heartbeat_in: 0, // Typical value 0 - disabled
	heartbeat_out: 20000, // Typical value 20000 - every 20 seconds

	// Wait in milliseconds before attempting auto reconnect
	// Set to 0 to disable
	// Typical value 5000 (5 seconds) but because this service will only be used for generating invoices, it is set to 10 seconds
	reconnect_delay: 10000,
};

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
		RegisterPageComponent,
		RegisterFormComponent,
		UserInvoiceComponent,
		CarsPageComponent,
		OwnershipComponent,
		CarPageComponent,
		GenerateInvoicePageComponent,
		GenerateInvoicesComponent,
		GovCarsComponent,
		GovCarComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes
		),
		AngularFontAwesomeModule,
		HttpClientModule,
		FormsModule,
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
		InvoiceService,
		OwnershipService,
		StompService,
		{
			provide: StompConfig,
			useValue: stompConfig
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}
