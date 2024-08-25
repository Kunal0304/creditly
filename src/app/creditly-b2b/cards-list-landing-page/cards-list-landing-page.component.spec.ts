import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListLandingPageComponent } from './cards-list-landing-page.component';

describe('CardsListLandingPageComponent', () => {
  let component: CardsListLandingPageComponent;
  let fixture: ComponentFixture<CardsListLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
