import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Http} from "@angular/http";
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  private baseUrl = environment.apiUrl;

  constructor(private http: Http, private cookieService: CookieService) {
  }

  // Todo: Connect with the proper backend
  authenticate(username: string, password: string): Promise<{ headers: Headers }> {
    const headers = this.getHeaders();
    headers.append('content-type',
      'application/x-www-form-urlencoded');

    const hash = btoa(username + password);

    return new Promise(resolve => {
      headers.append('Auth', hash);

      const object = {headers: headers};
      resolve(object);
    });
  }

  isAuthenticated(): boolean {
    return !!this.cookieService.get('Auth');
  }

  setAuthKey(key: string) {
    this.cookieService.set('Auth', key);
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
