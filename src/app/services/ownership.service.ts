import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Ownership} from '../models/ownership.model';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Vehicle} from '../models/vehicle.model';

@Injectable()
export class OwnershipService {

	private baseAdministrationUrl = environment.administrationApiUrl + 'accounts/cars/';
	private baseRegistrionUrl = environment.registrationApiUrl + 'vehicle/';

	constructor(private http: HttpClient, private auth: AuthService) {
	}

	getAll(): Observable<Ownership[]> {
		if (this.auth.isAuthenticated()) {
			return this.http.get<Ownership[]>(
				this.baseAdministrationUrl,
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
						new Date(ownership['readableFromDate']),
						new Date(ownership['readableToDate']),
					);

					ownerships.push(newOwnership);
				}

				return ownerships;
			});
		} else {
			return null;
		}
	}

	public getVehicleFromLicensePlate(licensePlate: String): Observable<Vehicle> {
		if (!this.auth.isAuthenticated()) {
			return null;
		}

		return this.http.get<Vehicle>(
			this.baseRegistrionUrl + 'licensePlate/' + licensePlate,
			{headers: this.getHeaders()}
		).map(result => {
			const vehicle = new Vehicle(
				result.id,
				result.countryCode,
				result.licensePlate,
				result.brand,
				result.type,
				result.category,
				result.hardwareSn
			);

			return vehicle;
		});
	}

	public addVehicleOwnership(vehicle: Vehicle) {
		if (!this.auth.isAuthenticated()) {
			return null;
		}

		const currentDate = new Date();

		const currentDateString = ('0' + currentDate.getDate()).slice(-2)
			+ '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2)
			+ '-' + currentDate.getFullYear();

		return this.http.post<Ownership>(
			this.baseAdministrationUrl,
			{
				vehicleId: vehicle.id,
				fromDate: currentDateString
			},
			{
				headers: this.getHeaders()
			}
		).map(result => {
			return result;
		});
	}

	private getHeaders(): HttpHeaders {
		const headers = new HttpHeaders({
			'Accept': 'application/json',
			'Authorization': this.auth.getAuthKey()
		});

		return headers;
	}
}
