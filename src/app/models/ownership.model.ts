import {Owner} from './owner.model';

export class Ownership {
	public id: number;
	public owner: Owner;
	public vehicleId: number;
	public fromDate: Date;
	public toDate: Date;
}
