import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateInvoicePageComponent } from './generate-invoice-page.component';

describe('GenerateInvoicePageComponent', () => {
  let component: GenerateInvoicePageComponent;
  let fixture: ComponentFixture<GenerateInvoicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateInvoicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateInvoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
