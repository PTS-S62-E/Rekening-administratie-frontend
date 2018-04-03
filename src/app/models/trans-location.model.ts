export class TransLocation {
	public lat: number;
	public lon: number;
	public dateTime: string;
	public serialnumber: string;
	public countrycode: string;


	constructor(lat: number,
				lon: number,
				dateTime: string,
				serialnumber: string,
				countrycode: string) {
		this.lat = lat;
		this.lon = lon;
		this.dateTime = dateTime;
		this.serialnumber = serialnumber;
		this.countrycode = countrycode;
	}
}
