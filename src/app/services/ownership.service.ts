import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Ownership} from '../models/ownership.model';
import {InvoiceThin} from '../models/invoice-thin.model';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Vehicle} from "../models/vehicle.model";

@Injectable()
export class OwnershipService {

	private baseUrl = environment.apiUrl + 'accounts/cars/';

	constructor(private http: HttpClient, private auth: AuthService) {
	}

	getAll(): Observable<Ownership[]> {
		if (this.auth.isAuthenticated()) {
			return this.http.get<Ownership[]>(
				this.baseUrl,
				{headers: this.getHeaders()}
			).map(result => {
				const ownerships = [];

				for (const ownership of result) {
					const newOwnership = new Ownership(
						ownership['id'],
						new Vehicle(
							ownership['vehicleDto']['id'],
							ownership['vehicleDto']['countryCode'],
							ownership['vehicleDto']['licensePlate'],
							ownership['vehicleDto']['brand'],
							ownership['vehicleDto']['type'],
							ownership['vehicleDto']['category'],
							ownership['vehicleDto']['hardwareSn'],
						),
						new Date(ownership['fromDate']),
						new Date(ownership['toDate']),
					);

					ownerships.push(newOwnership);
				}

				return ownerships;
			});
		} else {
			return null;
		}
	}


	private getHeaders(): HttpHeaders {
		const headers = new HttpHeaders({
			'Accept': 'application/json',
			'Authorization': this.auth.getAuthKey()
		});

		return headers;
	}
}
