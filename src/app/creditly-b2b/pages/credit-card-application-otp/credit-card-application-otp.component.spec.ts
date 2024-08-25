import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardApplicationOtpComponent } from './credit-card-application-otp.component';

describe('CreditCardApplicationOtpComponent', () => {
  let component: CreditCardApplicationOtpComponent;
  let fixture: ComponentFixture<CreditCardApplicationOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardApplicationOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardApplicationOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
