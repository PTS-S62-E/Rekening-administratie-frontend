import {Vehicle} from './vehicle.model';

export class Ownership {
	public id: number;
	public vehicle: Vehicle;
	public fromDate: Date;
	public toDate: Date;


	constructor(id: number,
				vehicle: Vehicle,
				fromDate: Date,
				toDate: Date) {
		this.id = id;
		this.vehicle = vehicle;
		this.fromDate = fromDate;
		this.toDate = toDate;
	}
}
