import {Component, OnDestroy, OnInit} from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-generate-invoice-page',
  templateUrl: './generate-invoice-page.component.html',
  styleUrls: ['./generate-invoice-page.component.css']
})
export class GenerateInvoicePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
