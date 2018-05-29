import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../../services/invoice.service';
import {InvoiceThin} from '../../models/invoice-thin.model';

@Component({
	selector: 'app-user-invoices',
	templateUrl: './user-invoices.component.html',
	styleUrls: ['./user-invoices.component.css']
})
export class UserInvoicesComponent implements OnInit {
	invoices: InvoiceThin[];

	constructor(public invoiceService: InvoiceService) {
	}

	ngOnInit(): void {
		this.invoiceService.getAll().subscribe(invoices =>
			this.invoices = invoices
		);
	}
}
