export class Vehicle {
	public id: number;
	public fromDate: Date;
	public toDate: Date;
	public vehicleDto: {
		id: number,
		licensePlate: string,
		brand: string,
		type: string,
		category: string,
		hardwareSn: string
	};

	constructor(id: number,
				fromDate: Date,
				toDate: Date,
				vehicleDto: {
					id: number,
					licensePlate: string,
					brand: string,
					type: string,
					category: string,
					hardwareSn: string
				}) {
		this.id = id;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.vehicleDto = vehicleDto;
	}
}
