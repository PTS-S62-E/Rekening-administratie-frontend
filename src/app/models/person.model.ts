/**
 * Created by sander on 25/03/2018.
 */

export class Person {
	public id: number;
	public name: string;
	public address: string;
	public zipcode: string;
	public city: string;

	constructor(id: number,
				name: string,
				address: string,
				zipcode: string,
				city: string) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.zipcode = zipcode;
		this.city = city;
	}
}
