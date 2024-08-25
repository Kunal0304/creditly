import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CreditCardApplicationFailureComponent } from '../creditly-b2b/pages/credit-card-application-failure/credit-card-application-failure.component';
import { CreditCardApplicationOtpComponent } from '../creditly-b2b/pages/credit-card-application-otp/credit-card-application-otp.component';
import { CreditCardApplicationSuccessComponent } from '../creditly-b2b/pages/credit-card-application-success/credit-card-application-success.component';
import { CreditCardApplicationComponent } from '../creditly-b2b/pages/credit-card-application/credit-card-application.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    CreditCardApplicationFailureComponent,
    CreditCardApplicationOtpComponent, 
    CreditCardApplicationSuccessComponent,
    CreditCardApplicationComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NotifierModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers:[DatePipe]
})
export class SharedModule { }
