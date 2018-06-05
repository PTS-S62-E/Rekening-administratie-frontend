import {Component, OnInit} from '@angular/core';
import {Invoice} from '../../models/invoice.model';
import {InvoiceService} from '../../services/invoice.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {Owner} from "../../models/owner.model";

@Component({
	selector: 'app-gov-invoice',
	templateUrl: './gov-invoice.component.html',
	styleUrls: ['./gov-invoice.component.css']
})
export class GovInvoiceComponent implements OnInit {
	public invoice: Invoice;
	public account: Owner;

	public loaded: boolean;

	constructor(public invoiceService: InvoiceService,
				private route: ActivatedRoute,
				private authService: AuthService) {
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

	public payInvoice() {
		this.invoiceService.pay(this.invoice.id).then(
			res => {
				console.log(res);
			}
		);
	}

	public getPrice(price): string {
		const result = price / 100;

		return result.toFixed(2).toString().replace('.', ',');
	}
}
