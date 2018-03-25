import {Component, Input, OnInit} from '@angular/core';
import {Status} from '../../models/status.enum';

@Component({
	selector: 'app-status-icon',
	templateUrl: './status-icon.component.html',
	styleUrls: ['./status-icon.component.css']
})
export class StatusIconComponent implements OnInit {
	@Input() status: Status;

	constructor() {
	}

	ngOnInit() {
	}

	statusIsEqualTo(statusString: string): boolean {
		if (statusString === 'PAID') {
			return (this.status === Status.PAID);
		}
		if (statusString === 'PENDING') {
			return (this.status === Status.PENDING);
		}
		if (statusString === 'OVERDUE') {
			return (this.status === Status.OVERDUE);
		}
	}

}
