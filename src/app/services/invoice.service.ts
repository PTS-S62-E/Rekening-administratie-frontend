import {Injectable} from '@angular/core';
import {Invoice} from '../models/invoice.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Person} from '../models/person.model';
import {Status} from '../models/status.enum';
import {TransLocation} from '../models/trans-location.model';
import {InvoiceDetails} from '../models/invoice-details.model';

@Injectable()
export class InvoiceService {

	public invoices: Invoice[] = [];

	private baseUrl = environment.apiUrl;

	constructor(private http: Http) {
		const locationPoints: TransLocation[] = [];
		const details: InvoiceDetails[] = [];

		const person = new Person(
			1,
			'Sander Geraedts',
			'Gebr. de Koninglaan 17',
			'5674XH',
			'Best'
		);


		for (let i = 0; i < 10; i++) {
			const locationPoint = new TransLocation(
				Math.random() * 100,
				Math.random() * 100,
				'12-04-2018',
				Math.round(Math.random() * 1000) + '-' +
				Math.round(Math.random() * 1000) + '-' +
				Math.round(Math.random() * 1000),
				'FI'
			);

			locationPoints.push(locationPoint);
		}

		for (let i = 0; i < 5; i++) {
			const detail = new InvoiceDetails(
				locationPoints,
				'This is a test description',
				Math.round(Math.random() * 10000),
				Math.round(Math.random() * 10000)
			);

			details.push(detail);
		}

		const now = new Date();

		for (let i = 0; i < 5; i++) {
			const invoice = new Invoice(
				i,
				person,
				new Date(now.getTime() - 1000 * 60 * 60 * 48),
				(Math.random() <= 0.5) ?
					new Date(now.getTime() + 1000 * 60 * 60 * 24) :
					new Date(now.getTime() - 1000 * 60 * 60 * 24),
				Math.random() <= 0.5,
				details
			);

			this.invoices.push(invoice);
		}
	}

	getAll(): Invoice[] {
		return this.invoices;
	}

	getByIndex(index: number): Invoice {
		return this.invoices[index];
	}

	private getHeaders(): Headers {
		const headers = new Headers();
		headers.append('Accept', 'application/json');
		// headers.append('Auth', this.cookie.get('Auth'));
		return headers;
	}


}

