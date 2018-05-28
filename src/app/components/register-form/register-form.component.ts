import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
	invalidInput = false;
	noInput = false;

	constructor(private auth: AuthService, private router: Router) {
	}

	ngOnInit() {
	}

	onRegister(name: string,
			   username: string,
			   password: string,
			   address: string,
			   postalcode: string,
			   city: string,
			   country: string) {
		if (name && username && password && address && city && country) {
			this.auth.register(
				name,
				username,
				password,
				address,
				postalcode,
				city,
				country
			)
				.then(
					res => {
						this.router.navigate(['login']);
					}
				)
				.catch(
					err => {
						console.log(err);
					}
				);
		} else {
			this.noInput = true;
		}

		return false;
	}

}
