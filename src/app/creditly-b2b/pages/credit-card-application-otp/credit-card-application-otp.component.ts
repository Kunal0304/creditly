import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card-application-otp',
  templateUrl: './credit-card-application-otp.component.html',
  styleUrls: ['./credit-card-application-otp.component.scss']
})
export class CreditCardApplicationOtpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public gotoConfirm(): void {
    this.router.navigateByUrl('/cc-success');
  }
}
