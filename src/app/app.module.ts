import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { LandingPageCardsListComponent } from './landing-page-cards-list/landing-page-cards-list.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Router } from '@angular/router';
import { HashLocationStrategy, LocationStrategy, DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageCardsListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy},
    DatePipe
  ], 
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
