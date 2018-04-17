import {Owner} from './owner.model';

export class Account {
	public id: number;
	public email: string;
	public password: string;
	public owner: Owner;
}
