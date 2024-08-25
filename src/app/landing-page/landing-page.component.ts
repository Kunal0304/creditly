import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public gotoCardsList() {
    this.router.navigateByUrl('/cards-list');
  }

}
