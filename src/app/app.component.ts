import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(translate: TranslateService, cookies: CookieService) {
		const lang = cookies.get('lang');

		if (lang) {
			translate.setDefaultLang(lang);
		} else {
			translate.setDefaultLang('en');
		}
	}
}
