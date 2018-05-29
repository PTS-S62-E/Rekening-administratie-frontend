import {Component, OnInit} from '@angular/core';
import {OwnershipService} from '../../services/ownership.service';
import {Ownership} from '../../models/ownership.model';

@Component({
	selector: 'app-cars-page',
	templateUrl: './cars-page.component.html',
	styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
	public ownerships: Ownership[];

	constructor(private ownershipService: OwnershipService) {
		this.ownerships = [];
	}

	ngOnInit() {
		this.ownershipService.getAll().subscribe( ownerships => {
			this.ownerships = ownerships;
		});
	}
}
