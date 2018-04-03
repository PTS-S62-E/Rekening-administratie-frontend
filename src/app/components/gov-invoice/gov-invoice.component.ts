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

	constructor(private invoiceService: InvoiceService,
				private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe(params =>
			this.invoice = this.invoiceService.getByIndex(params['id'])
		);
	}

}
