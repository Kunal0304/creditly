import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardApplicationSuccessComponent } from './credit-card-application-success.component';

describe('CreditCardApplicationSuccessComponent', () => {
  let component: CreditCardApplicationSuccessComponent;
  let fixture: ComponentFixture<CreditCardApplicationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardApplicationSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardApplicationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
