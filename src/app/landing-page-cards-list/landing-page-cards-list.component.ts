import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-cards-list',
  templateUrl: './landing-page-cards-list.component.html',
  styleUrls: ['./landing-page-cards-list.component.scss']
})
export class LandingPageCardsListComponent implements OnInit {

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor() { }

  ngOnInit(): void {
  }

}
