import {TransLocation} from './trans-location.model';
export class InvoiceDetails {
	public locationPoints: TransLocation[];
	public description: string;
	public price: number;
	public distance: number;


	constructor(locationPoints: TransLocation[],
				description: string,
				price: number,
				distance: number) {
		this.locationPoints = locationPoints;
		this.description = description;
		this.price = price;
		this.distance = distance;
	}

	public getPrice(): string {
		const price = this.price / 100;

		return price.toFixed(2).toString().replace('.', ',');
	}
}
