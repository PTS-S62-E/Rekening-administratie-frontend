import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovInvoicesComponent } from './gov-invoices.component';

describe('GovInvoicesComponent', () => {
  let component: GovInvoicesComponent;
  let fixture: ComponentFixture<GovInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
