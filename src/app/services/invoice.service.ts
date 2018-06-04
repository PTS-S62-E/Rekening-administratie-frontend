import {Injectable} from '@angular/core';
import {Invoice} from '../models/invoice.model';
import {environment} from '../../environments/environment';
import {Owner} from '../models/owner.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {InvoiceThin} from '../models/invoice-thin.model';

@Injectable()
export class InvoiceService {
	private baseUrl = environment.administrationApiUrl + 'invoices/';

	constructor(private http: HttpClient, private auth: AuthService) {
	}

	get(index: number): Observable<Invoice> {
		if (this.auth.isAuthenticated()) {
			return this.http.get<Invoice>(
				this.baseUrl + index,
				{headers: this.getHeaders()}
			).map(invoice => {
				const sentDate = new Date(invoice['invoiceDate']);

				// Flipping JavaScript...
				const dueDate = new Date(new Date(sentDate)
					.setMonth(sentDate.getMonth() + 2));

				const result = new Invoice(
					invoice['invoiceNumber'],
					new Owner(0, 'todo', 'todo', 'todo', 'todo'),
					sentDate,
					dueDate,
					invoice['paymentStatus'],
					invoice['invoiceDetails']
				);

				return result;
			});
		} else {
			return null;
		}
	}

	getAll(): Observable<InvoiceThin[]> {
		if (this.auth.isAuthenticated()) {
			return this.http.get<InvoiceThin[]>(
				this.baseUrl,
				{headers: this.getHeaders()}
			).map(result => {
				const results = [];

				for (const invoice of result) {
					const sentDate = new Date(invoice['invoiceDate']);

					// Flipping JavaScript...
					const dueDate = new Date(new Date(sentDate)
						.setMonth(sentDate.getMonth() + 1));

					results.push(new InvoiceThin(
						invoice['id'],
						sentDate,
						dueDate,
						invoice['paymentStatus'],
						invoice['price']
					));
				}

				return results;
			});
		} else {
			return null;
		}
	}

	public pay(index: number) {
		const headers = this.getHeaders();

		return this.http.post(
			this.baseUrl + 'pay',
			{
				invoiceNumber: index
			},
			{headers: headers}
		).toPromise();
	}

	private getHeaders(): HttpHeaders {
		const headers = new HttpHeaders({
			'Accept': 'application/json',
			'Authorization': this.auth.getAuthKey()
		});

		return headers;
	}


}

