import {Component, OnInit} from '@angular/core';
import {Invoice} from '../../models/invoice.model';
import {InvoiceService} from '../../services/invoice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-gov-invoice',
	templateUrl: './gov-invoice.component.html',
	styleUrls: ['./gov-invoice.component.css']
})
export class GovInvoiceComponent implements OnInit {
	invoice: Invoice;
	invoices: Invoice[];

	constructor(public invoiceService: InvoiceService,
				private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.invoiceService.getAll().subscribe(invoices =>
			this.invoices = invoices
		);

		this.route.params.subscribe(params =>
			this.invoice = this.invoiceService.get(params['id'])
		);
	}

	getIndex(): number {
		return this.invoices.findIndex(i => i.id === this.invoice.id);
	}
}
