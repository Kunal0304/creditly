import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { BankAccountDetailsComponent } from '../../components/bank-account-details/bank-account-details.component';
import { ContactInfoComponent } from '../../components/contact-info/contact-info.component';
import { EmploymentDetailsComponent } from '../../components/employment-details/employment-details.component';
import { FinancialDetailsComponent } from '../../components/financial-details/financial-details.component';
import { HistoryDetailsComponent } from '../../components/history-details/history-details.component';
import { PersonalDetailsComponent } from '../../components/personal-details/personal-details.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileInfoComponent } from '../../components/profile-info/profile-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileFormModule } from 'src/app/profile-form/profile-form.module';

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalDetailsComponent,
    ContactInfoComponent,
    EmploymentDetailsComponent,
    FinancialDetailsComponent,
    BankAccountDetailsComponent,
    HistoryDetailsComponent,
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SlickCarouselModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileFormModule
  ],
  exports: [     ProfileComponent,
    PersonalDetailsComponent,
    ContactInfoComponent,
    EmploymentDetailsComponent,
    FinancialDetailsComponent,
    BankAccountDetailsComponent,
    HistoryDetailsComponent,
    ProfileInfoComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }
