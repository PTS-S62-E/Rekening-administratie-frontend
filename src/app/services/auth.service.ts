import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

	private baseUrl = environment.administrationApiUrl + 'accounts/';
	public gov = false;

	constructor(private http: HttpClient,
				private cookieService: CookieService,
				private router: Router) {
	}

	authenticate(email: string, password: string, gov: boolean): any {
		this.setGov(gov);

		const headers = this.getHeaders();

		const payload = {
			'email': email,
			'password': password
		};

		return this.http.post(
			this.baseUrl + 'login',
			payload,
			{headers: headers}
		).toPromise();
	}

	register(name: string,
			 email: string,
			 password: string,
			 address: string,
			 postalcode: string,
			 city: string,
			 country: string): any {
		const headers = this.getHeaders();

		const payload = {
			'name': name,
			'email': email,
			'password': password,
			'address': address,
			'postalCode': postalcode,
			'city': city,
			'country': country
		};

		return this.http.post(
			this.baseUrl,
			payload,
			{headers: headers}
		).toPromise();
	}

	isAuthenticated(): boolean {
		return !!this.cookieService.get('Auth');
	}

	getAuthKey(): string {
		return this.cookieService.get('Auth');
	}

	setAuthKey(key: string) {
		this.cookieService.set('Auth', key);
	}

	logOut() {
		this.cookieService.deleteAll('Auth');

		this.router.navigate(['login']);
	}

	getGov(): boolean {
		return (this.cookieService.get('Gov') === 'true');
	}

	setGov(value: boolean) {
		this.cookieService.set('Gov', value.toString());
	}


	private getHeaders(): HttpHeaders {
		const headers = new HttpHeaders({
			'Accept': 'application/json'
		});

		return headers;
	}
}
