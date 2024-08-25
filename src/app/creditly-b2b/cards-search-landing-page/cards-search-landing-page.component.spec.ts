import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSearchLandingPageComponent } from './cards-search-landing-page.component';

describe('CardsSearchLandingPageComponent', () => {
  let component: CardsSearchLandingPageComponent;
  let fixture: ComponentFixture<CardsSearchLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSearchLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSearchLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
