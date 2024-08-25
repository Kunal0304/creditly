import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycreditcardComponent } from './applycreditcard.component';

describe('ApplycreditcardComponent', () => {
  let component: ApplycreditcardComponent;
  let fixture: ComponentFixture<ApplycreditcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplycreditcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplycreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
