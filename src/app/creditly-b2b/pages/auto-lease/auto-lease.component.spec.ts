import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLeaseComponent } from './auto-lease.component';

describe('AutoLeaseComponent', () => {
  let component: AutoLeaseComponent;
  let fixture: ComponentFixture<AutoLeaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoLeaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
