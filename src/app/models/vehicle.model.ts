export class Vehicle {
	id: number;

	// countryCode, take me home
	// To the place I belong
	// West Virginia
	// Mountain mamma, take me home
	// countryCode
	countryCode: string;
	licensePlate: string;
	brand: string;
	type: string;
	category: string;
	hardwareSn: string;

	constructor(id: number,
				countryCode: string,
				licensePlate: string,
				brand: string,
				type: string,
				category: string,
				hardwareSn: string) {
		this.id = id;
		this.countryCode = countryCode;
		this.licensePlate = licensePlate;
		this.brand = brand;
		this.type = type;
		this.category = category;
		this.hardwareSn = hardwareSn;
	}
}
