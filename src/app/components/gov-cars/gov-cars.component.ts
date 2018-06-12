import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../models/vehicle.model';
import {InvoiceService} from '../../services/invoice.service';
import {InvoiceThin} from '../../models/invoice-thin.model';
import {OwnershipService} from "../../services/ownership.service";

@Component({
	selector: 'app-gov-cars',
	templateUrl: './gov-cars.component.html',
	styleUrls: ['./gov-cars.component.css']
})
export class GovCarsComponent implements OnInit {
	public licenseplate: string;
	public invoices: InvoiceThin[];
	public vehicle: Vehicle;
	public loading = false;

	constructor(private invoiceService: InvoiceService,
				private ownershipService: OwnershipService) {
	}

	ngOnInit() {
	}

	public searchVehicle(license: string) {
		this.licenseplate = license;
		this.loading = true;


		this.ownershipService.getVehicleFromLicensePlate(license)
			.subscribe(vehicle => {
				this.vehicle = vehicle;
			});

		this.invoiceService.getByLicenseplate(license).subscribe(result => {
			this.invoices = result;
			this.loading = false;
		});
	}
}
