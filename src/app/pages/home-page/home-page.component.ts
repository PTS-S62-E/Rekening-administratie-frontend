import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
	public gov: boolean;

	constructor(private authService: AuthService) {
		this.gov = this.authService.gov;
	}

	ngOnInit() {
	}

}
