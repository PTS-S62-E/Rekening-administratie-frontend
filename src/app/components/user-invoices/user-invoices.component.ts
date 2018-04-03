import {Component, OnInit} from '@angular/core';
import {Status} from "../../models/status.enum";
import {Invoice} from "../../models/invoice.model";
import {Person} from "../../models/person.model";
import {InvoiceService} from "../../services/invoice.service";

@Component({
	selector: 'app-user-invoices',
	templateUrl: './user-invoices.component.html',
	styleUrls: ['./user-invoices.component.css']
})
export class UserInvoicesComponent implements OnInit {
	ngOnInit(): void {
	}

	invoices: Invoice[];

	constructor(private invoiceService: InvoiceService) {
		this.invoices = this.invoiceService.getAll();
	}
}
