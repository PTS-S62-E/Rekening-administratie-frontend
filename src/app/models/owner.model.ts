export class Owner {
	public id: number;
	public name: string;
	public address: string;
	public postalCode: string;
	public city: string;

	constructor(id: number,
				name: string,
				address: string,
				postalCode: string,
				city: string) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.postalCode = postalCode;
		this.city = city;
	}
}
