import {Component, OnInit} from '@angular/core';
import {OwnershipService} from '../../services/ownership.service';
import {Ownership} from '../../models/ownership.model';
import {Vehicle} from "../../models/vehicle.model";

declare var $: any;

@Component({
	selector: 'app-ownership',
	templateUrl: './ownership.component.html',
	styleUrls: ['./ownership.component.css']
})
export class OwnershipComponent implements OnInit {
	public ownerships: Ownership[];
	public vehicle: Vehicle;

	constructor(private ownershipService: OwnershipService) {
		this.ownerships = [];
	}

	ngOnInit() {
		this.ownershipService.getAll().subscribe(ownerships => {
			this.ownerships = ownerships;
		});
	}

	onLicenseplateSubmit(licensePlate: String) {
		this.ownershipService.getVehicleFromLicensePlate(licensePlate)
			.subscribe(vehicle => {
				this.vehicle = vehicle;

				console.log(vehicle);
				$('#modal').modal('show');
			});

		return false;
	}

	onAddOwnership() {
		this.ownershipService
			.addVehicleOwnership(this.vehicle)
			.subscribe(result => {
				$('#modal').modal('hide');
			});
	}
}
