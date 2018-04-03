import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovInvoiceComponent } from './gov-invoice.component';

describe('GovInvoiceComponent', () => {
  let component: GovInvoiceComponent;
  let fixture: ComponentFixture<GovInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
