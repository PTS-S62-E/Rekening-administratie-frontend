import {Status} from './status.enum';
import {InvoiceDetails} from './invoice-details.model';
import {Owner} from './owner.model';
/**
 * Created by sander on 25/03/2018.
 */

export class Invoice {
	public id: number;
	public person: Owner;
	public sendOn: Date;
	public due: Date;
	public paid: boolean;
	public details: InvoiceDetails[];

	constructor(id: number,
				person: Owner,
				sendOn: Date,
				due: Date,
				paid: boolean,
				details: InvoiceDetails[]) {
		this.id = id;
		this.person = person;
		this.sendOn = sendOn;
		this.due = due;
		this.paid = paid;

		this.details = details;
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
		let price = 0;

		for (let i = 0; i < this.details.length; i++) {
			price += this.details[i].price;
		}

		price = price / 100;

		return price.toFixed(2).toString().replace('.', ',');
	}
}
