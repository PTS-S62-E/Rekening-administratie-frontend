import { Component, OnInit } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-generate-invoices',
  templateUrl: './generate-invoices.component.html',
  styleUrls: ['./generate-invoices.component.css']
})
export class GenerateInvoicesComponent implements OnInit {

  constructor(private _stompService: StompService) { }

  ngOnInit() {
  }

  generateInvoices() {
  	this._stompService.serverHeadersObservable.subscribe(res => { console.log(res); }, err => { console.log(err); });
  	this._stompService.publish('/exchange/REKENINGRIJDEN_EXCHANGE/fi.antaminen.generate.invoices', 'UNUSED MESSAGE');
  }

}
