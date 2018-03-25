import {Person} from './person.model';
import {Status} from './status.enum';
/**
 * Created by sander on 25/03/2018.
 */

export class Invoice {
	public id: number;
	public person: Person;
	public due: Date;
	public status: Status;
	public price: number;

	constructor(id: number,
				person: Person,
				due: Date,
				status: Status,
				price: number) {
		this.id = id;
		this.person = person;
		this.due = due;
		this.status = status;
		this.price = price;
	}
}
