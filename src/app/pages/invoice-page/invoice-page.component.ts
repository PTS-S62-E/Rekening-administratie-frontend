import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
	selector: 'app-invoice-page',
	templateUrl: './invoice-page.component.html',
	styleUrls: ['./invoice-page.component.css']
})
export class InvoicePageComponent implements OnInit {
	public gov: boolean;

	constructor(translate: TranslateService) {
		this.gov = false;
	}

	ngOnInit() {
	}

}
