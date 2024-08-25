import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardApplicationFailureComponent } from './credit-card-application-failure.component';

describe('CreditCardApplicationFailureComponent', () => {
  let component: CreditCardApplicationFailureComponent;
  let fixture: ComponentFixture<CreditCardApplicationFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardApplicationFailureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardApplicationFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
