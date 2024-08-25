import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageCardsListComponent } from './landing-page-cards-list.component';

describe('LandingPageCardsListComponent', () => {
  let component: LandingPageCardsListComponent;
  let fixture: ComponentFixture<LandingPageCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
