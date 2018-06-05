import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../../services/invoice.service';
import {InvoiceThin} from '../../models/invoice-thin.model';

@Component({
	selector: 'app-gov-invoices',
	templateUrl: './gov-invoices.component.html',
	styleUrls: ['./gov-invoices.component.css']
})
export class GovInvoicesComponent implements OnInit {
	invoices: InvoiceThin[];

	constructor(private invoiceService: InvoiceService) {
	}

	ngOnInit() {
		this.invoiceService.getAll().subscribe(invoices =>
			this.invoices = invoices
		);
	}

}
