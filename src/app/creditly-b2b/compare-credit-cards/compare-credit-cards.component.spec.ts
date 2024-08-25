import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCreditCardsComponent } from './compare-credit-cards.component';

describe('CompareCreditCardsComponent', () => {
  let component: CompareCreditCardsComponent;
  let fixture: ComponentFixture<CompareCreditCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareCreditCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
