import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	invalidInput = false;
	noInput = false;

	constructor(private auth: AuthService, private router: Router) {
	}

	ngOnInit() {
	}


	onLogin(username: string, password: string) {
		this.invalidInput = false;
		this.noInput = false;
		if (username && password) {
			this.auth.authenticate(username, password)
				.then(
					res => {
						this.auth.setAuthKey(res.headers.get('Auth'));
						this.router.navigate(['']);
					}
				)
				.catch(
					err => {
						console.log(err);
						this.invalidInput = true;
					}
				);
		}
		else {
			this.noInput = true;
		}
	}
}
