import {Component, OnInit} from '@angular/core';
import {Status} from "../../models/status.enum";
import {Invoice} from "../../models/invoice.model";
import {Owner} from "../../models/owner.model";
import {InvoiceService} from "../../services/invoice.service";

@Component({
	selector: 'app-gov-invoices',
	templateUrl: './gov-invoices.component.html',
	styleUrls: ['./gov-invoices.component.css']
})
export class GovInvoicesComponent implements OnInit {
	invoices: Invoice[];

	constructor(private invoiceService: InvoiceService) {
	}

	ngOnInit() {
		this.invoiceService.getAll().subscribe(invoices =>
			this.invoices = invoices
		);
	}

}
