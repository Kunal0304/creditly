import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountOpenComponent } from './bank-account-open.component';

describe('BankAccountOpenComponent', () => {
  let component: BankAccountOpenComponent;
  let fixture: ComponentFixture<BankAccountOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
