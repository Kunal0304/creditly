import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditlyB2bRoutingModule } from './creditly-b2b-routing.module';
import { CardsListLandingPageComponent } from './cards-list-landing-page/cards-list-landing-page.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CreditlyB2bComponent } from './creditly-b2b.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { PersonalFinanceComponent } from './personal-finance/personal-finance.component';
import { RouterModule } from '@angular/router';
import { MortgageComponent } from './mortgage/mortgage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FAQComponent } from './faq/faq.component';
import { CompareCreditCardsComponent } from './compare-credit-cards/compare-credit-cards.component';
import { AutoLeaseComponent } from './pages/auto-lease/auto-lease.component';
import { VehicleInfoComponent } from './components/vehicle-info/vehicle-info.component';
import { AutoLeaseCarInfoComponent } from './components/auto-lease-car-info/auto-lease-car-info.component';
import { AutoLeaseFinanceComponent } from './components/auto-lease-finance/auto-lease-finance.component';
import { ApplycreditcardComponent } from './applycreditcard/applycreditcard.component';
import { TestingComponent } from './testing/testing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { CardsSearchLandingPageComponent } from './cards-search-landing-page/cards-search-landing-page.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { ProfileFormModule } from '../profile-form/profile-form.module';
import { ProfileModule } from './modules/profile/profile.module';
@NgModule({
  declarations: [
    CardsListLandingPageComponent,
    CreditlyB2bComponent,
    PersonalFinanceComponent,
    MortgageComponent,
    AboutUsComponent,
    FAQComponent,
    CompareCreditCardsComponent,
    AutoLeaseComponent,
    VehicleInfoComponent,
    AutoLeaseFinanceComponent,
    AutoLeaseCarInfoComponent,
    ApplycreditcardComponent,
    TestingComponent,
    CardsSearchLandingPageComponent,
  ],
  imports: [
    ProfileFormModule,
    CommonModule,
    CreditlyB2bRoutingModule,
    NgxSliderModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    NotifierModule,
    FormsModule,
    ProfileModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreditlyB2bModule { }
