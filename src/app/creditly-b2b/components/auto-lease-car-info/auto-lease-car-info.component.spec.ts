import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLeaseCarInfoComponent } from './auto-lease-car-info.component';

describe('AutoLeaseCarInfoComponent', () => {
  let component: AutoLeaseCarInfoComponent;
  let fixture: ComponentFixture<AutoLeaseCarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoLeaseCarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLeaseCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
