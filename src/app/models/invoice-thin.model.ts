import {Status} from './status.enum';
import {InvoiceDetails} from './invoice-details.model';
import {Owner} from './owner.model';
/**
 * Created by sander on 25/03/2018.
 */

export class InvoiceThin {
	public id: number;
	public sendOn: Date;
	public due: Date;
	public paid: boolean;
	public price: number;
	public name: string

	constructor(id: number,
				sendOn: Date,
				due: Date,
				paid: boolean,
				price: number,
				name: string) {
		this.id = id;
		this.sendOn = sendOn;
		this.due = due;
		this.paid = paid;
		this.price = price;
		this.name = name;
	}

	public getStatus(): Status {
		if (!this.paid && this.due < new Date()) {
			return Status.OVERDUE;
		}

		if (this.paid) {
			return Status.PAID;
		}

		return Status.PENDING;
	}

	public getPrice(): String {
		const price = this.price / 100;

		return price.toFixed(2).toString().replace('.', ',');
	}

	public getName() {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		return monthNames[this.sendOn.getMonth()];

	}
}
