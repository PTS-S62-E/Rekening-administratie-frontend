import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

	private baseUrl = environment.apiUrl + 'accounts/';

	constructor(private http: HttpClient,
				private cookieService: CookieService,
				private router: Router) {
	}

	// Todo: Connect with the proper backend
	authenticate(email: string, password: string): any {

		const headers = this.getHeaders();

		const payload = {
			'email': email,
			'password': password
		};

		console.log(this.baseUrl + 'login');


		return this.http.post(
			this.baseUrl + 'login',
			payload,
			{headers: headers}
		).toPromise();
	}

	isAuthenticated(): boolean {
		return !!this.cookieService.get('Auth');
	}

	setAuthKey(key: string) {
		this.cookieService.set('Auth', key);
	}

	logOut() {
		this.cookieService.delete('Auth');

		this.router.navigate(['login']);
	}

	private getHeaders() {
		const headers = new HttpHeaders();
		headers.append('Accept', 'application/json');
		return headers;
	}
}
