import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InvoiceService} from '../../services/invoice.service';
import {Invoice} from '../../models/invoice.model';
import {AuthService} from '../../services/auth.service';
import {Owner} from '../../models/owner.model';

@Component({
	selector: 'app-user-invoice',
	templateUrl: './user-invoice.component.html',
	styleUrls: ['./user-invoice.component.css']
})
export class UserInvoiceComponent implements OnInit {
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

		this.account = this.authService.getOwner();
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
