import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare-credit-cards',
  templateUrl: './compare-credit-cards.component.html',
  styleUrls: ['./compare-credit-cards.component.scss']
})
export class CompareCreditCardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateToCardsList(): void {
    this.router.navigateByUrl('creditly/cards-list');
  }

}
