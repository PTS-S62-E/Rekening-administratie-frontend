import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovCarsComponent } from './gov-cars.component';

describe('GovCarsComponent', () => {
  let component: GovCarsComponent;
  let fixture: ComponentFixture<GovCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
