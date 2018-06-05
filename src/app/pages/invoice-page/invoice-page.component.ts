import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
	selector: 'app-invoice-page',
	templateUrl: './invoice-page.component.html',
	styleUrls: ['./invoice-page.component.css']
})
export class InvoicePageComponent implements OnInit {
	public gov: boolean;

	constructor(private authService: AuthService) {
		this.gov = this.authService.gov;
	}

	ngOnInit() {
	}

}
