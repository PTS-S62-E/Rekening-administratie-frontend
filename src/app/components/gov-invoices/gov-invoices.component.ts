import {Component, OnInit} from '@angular/core';
import {Status} from "../../models/status.enum";
import {Invoice} from "../../models/invoice.model";
import {Person} from "../../models/person.model";

@Component({
	selector: 'app-gov-invoices',
	templateUrl: './gov-invoices.component.html',
	styleUrls: ['./gov-invoices.component.css']
})
export class GovInvoicesComponent implements OnInit {
	status: Status;

	invoices: [Invoice];

	constructor() {
		const person1 = new Person(
			1,
			'Sander Geraedts',
			'Gebr. de Koninglaan 17',
			'5674XH',
			'Best'
		);
		const person2 = new Person(
			2,
			'Teun Willems',
			'Gebr. de Koninglaan 17',
			'5674XH',
			'Best'
		);
		const person3 = new Person(
			3,
			'Jules Kwetters',
			'Gebr. de Koninglaan 17',
			'5674XH',
			'Best'
		);

		const today = new Date();
		const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
		const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));

		const invoice1 = new Invoice(
			1,
			person1,
			tomorrow,
			Status.PAID,
			100
		);

		const invoice2 = new Invoice(
			2,
			person2,
			tomorrow,
			Status.PENDING,
			100.25
		);

		const invoice3 = new Invoice(
			3,
			person1,
			tomorrow,
			Status.PENDING,
			0.25
		);

		const invoice4 = new Invoice(
			4,
			person3,
			tomorrow,
			Status.PENDING,
			69.25
		);

		const invoice5 = new Invoice(
			5,
			person1,
			yesterday,
			Status.OVERDUE,
			100.25
		);

		this.invoices = [invoice1, invoice2, invoice3, invoice4, invoice5];
	}

	ngOnInit() {
	}

}
