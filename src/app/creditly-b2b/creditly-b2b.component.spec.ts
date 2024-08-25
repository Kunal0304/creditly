import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditlyB2bComponent } from './creditly-b2b.component';

describe('CreditlyB2bComponent', () => {
  let component: CreditlyB2bComponent;
  let fixture: ComponentFixture<CreditlyB2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditlyB2bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditlyB2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
