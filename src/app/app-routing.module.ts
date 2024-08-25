import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardApplicationFailureComponent } from './creditly-b2b/pages/credit-card-application-failure/credit-card-application-failure.component';
import { CreditCardApplicationOtpComponent } from './creditly-b2b/pages/credit-card-application-otp/credit-card-application-otp.component';
import { CreditCardApplicationSuccessComponent } from './creditly-b2b/pages/credit-card-application-success/credit-card-application-success.component';
import { CreditCardApplicationComponent } from './creditly-b2b/pages/credit-card-application/credit-card-application.component';
import { ProfileComponent } from './creditly-b2b/pages/profile/profile.component';
import { LandingPageCardsListComponent } from './landing-page-cards-list/landing-page-cards-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { AuthGuard } from './shared/routingGuard/auth.guard';
import { LoginGuard } from './shared/routingGuard/login.guard';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'creditly',
    pathMatch: 'full',
  },
  {
    path: 'creditly',
    loadChildren: () =>
      import(`./creditly-b2b/creditly-b2b.module`).then(
        (module) => module.CreditlyB2bModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import(`./creditly-b2b/modules/profile/profile.module`).then(
        (m) => m.ProfileModule
      ),
  },
  // {
  //   path: 'profileForm',
  //   loadChildren: () =>
  //     import(`./profile-form/profile-form.module`).then(
  //       (m) => m.ProfileFormModule
  //     ),
  // },
  {
    path: 'userProfile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
 
  {
    path: 'cc',
    component: CreditCardApplicationComponent,
  },
  {
    path: 'cc-otp',
    component: CreditCardApplicationOtpComponent,
  },
  {
    path: 'cc-failure',
    component: CreditCardApplicationFailureComponent,
  },
  {
    path: 'cc-success',
    component: CreditCardApplicationSuccessComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      onSameUrlNavigation: 'reload',
    }),
    NgxSliderModule
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
