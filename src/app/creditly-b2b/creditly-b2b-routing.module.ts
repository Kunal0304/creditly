import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplycreditcardComponent } from './applycreditcard/applycreditcard.component';
import { CardsListLandingPageComponent } from './cards-list-landing-page/cards-list-landing-page.component';
import { CompareCreditCardsComponent } from './compare-credit-cards/compare-credit-cards.component';
import { BankAccountDetailsComponent } from './components/bank-account-details/bank-account-details.component';
import { VehicleInfoComponent } from './components/vehicle-info/vehicle-info.component';
import { CreditlyB2bComponent } from './creditly-b2b.component';
import { FAQComponent } from './faq/faq.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { AutoLeaseComponent } from './pages/auto-lease/auto-lease.component';
import { BankAccountOpenComponent } from './pages/bank-account-open/bank-account-open.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PersonalFinanceComponent } from './personal-finance/personal-finance.component';
import { TestingComponent } from './testing/testing.component';
import { CardsSearchLandingPageComponent } from './cards-search-landing-page/cards-search-landing-page.component';
import { LoginGuard } from '../shared/routingGuard/login.guard';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: "cards-search",
    pathMatch: "full"
  }, */
  {
    path: '',
    component: CreditlyB2bComponent, 
    children: [
      {
        path: "", redirectTo: "LandingPage", pathMatch: "full"
      },
      {
        path: "cards-list", component: CardsListLandingPageComponent
      },
      {
        path: "personalFinance", component: PersonalFinanceComponent
      },
      {
        path: "mortgage", component: MortgageComponent
      },
      {
        path: "aboutus", component: AboutUsComponent
      },
      {
        path: "faq", component: FAQComponent
      },
      {
        path: "cardsCompare", component: CompareCreditCardsComponent
      },
      {
        path:"auto-lease",component:AutoLeaseComponent
      },
      {
        path:"auto-lease/vehicelInfo",component:VehicleInfoComponent
      },
      {
        path:"bank-account",component:BankAccountOpenComponent
      }, 
      {
        path:"applycard",component:ApplycreditcardComponent
      },
      {
        path:"testing",component:TestingComponent
      },
       {
        path: 'LandingPage',
        component: CardsSearchLandingPageComponent,
        canActivate: [LoginGuard],
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditlyB2bRoutingModule { }
