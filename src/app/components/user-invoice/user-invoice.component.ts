import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InvoiceService} from '../../services/invoice.service';
import {Invoice} from '../../models/invoice.model';

@Component({
	selector: 'app-user-invoice',
	templateUrl: './user-invoice.component.html',
	styleUrls: ['./user-invoice.component.css']
})
export class UserInvoiceComponent implements OnInit {
	public invoice: Invoice;
	public invoices: Invoice[];

	public loaded: boolean;

	constructor(public invoiceService: InvoiceService,
				private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.loaded = false;

		this.invoiceService.getAll().subscribe(invoices => {
				this.invoices = invoices;

				console.log(invoices);

				this.route.params.subscribe(params => {
						this.invoice = this.invoiceService.get(params['id']);
						console.log(this.invoice);
					}
				);

				this.loaded = true;
			}
		);
	}

	getIndex(): number {
		return this.invoices.findIndex(i => i.id === this.invoice.id);
	}

}
