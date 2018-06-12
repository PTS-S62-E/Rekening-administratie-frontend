import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovCarComponent } from './gov-car.component';

describe('GovCarComponent', () => {
  let component: GovCarComponent;
  let fixture: ComponentFixture<GovCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
