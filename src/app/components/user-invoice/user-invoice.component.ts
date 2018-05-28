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

	public loaded: boolean;

	constructor(public invoiceService: InvoiceService,
				private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
				this.invoiceService.get(params['id'])
					.subscribe(invoice => {
						this.invoice = invoice;
						this.loaded = true;
					});
			}
		);
	}

	public getPrice(price): string {
		const result = price / 100;

		return result.toFixed(2).toString().replace('.', ',');
	}
}
