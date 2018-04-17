export class Owner {
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
