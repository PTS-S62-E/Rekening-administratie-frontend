import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private auth: AuthService,
				private translate: TranslateService,
				private cookies: CookieService) {
	}

	ngOnInit() {
	}

	logOut() {
		this.auth.logOut();
	}

	isLoggedIn(): boolean {
		return this.auth.isAuthenticated();
	}

	switchLanguage(language: string) {
		this.translate.use(language);
		this.cookies.set('lang', language);
	}
}
