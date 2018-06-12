import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
	selector: 'app-cars-page',
	templateUrl: './cars-page.component.html',
	styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
	public gov: boolean;

	constructor(private authService: AuthService) {
		this.gov = this.authService.getGov();
	}

	ngOnInit() {
	}
}
