import {Component, OnInit} from '@angular/core';
import {Status} from '../../models/status.enum';
import {Invoice} from '../../models/invoice.model';
import {Owner} from '../../models/owner.model';
import {InvoiceService} from '../../services/invoice.service';

@Component({
	selector: 'app-user-invoices',
	templateUrl: './user-invoices.component.html',
	styleUrls: ['./user-invoices.component.css']
})
export class UserInvoicesComponent implements OnInit {
	invoices: Invoice[];

	constructor(public invoiceService: InvoiceService) {
	}

	ngOnInit(): void {
		this.invoiceService.getAll().subscribe(invoices =>
			this.invoices = invoices
		);
	}
}
