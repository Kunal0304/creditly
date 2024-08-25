import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-cards-list-landing-page',
  templateUrl: './cards-list-landing-page.component.html',
  styleUrls: ['./cards-list-landing-page.component.scss']
})
export class CardsListLandingPageComponent implements OnInit {
  profileDate = JSON.parse(localStorage.getItem('loginResponse'));
  cards = JSON.parse(localStorage.getItem("masterData"))?.cards;
  value: number = 60000;
  options: Options = {
    floor: 3000,
    ceil: 200000
  };
  NationalityID = 1;
  showCardDetailsFlag: string = "_";
  oriProduct: Array<any> = [];
  product: Array<any> = [];
  submit = false;
  isSoudi = false;
  compare = false;
  finding = false;
  financeProduct: Array<any> = [];
  complainFilter: Array<any> = [];

  Shariah_Compliant = false;
  AnnualFeeChk = false;
  mainData = {
    "PageNumber": 1,
    "PageSize": 100,
    "WorkTypeID": 0,
    "NetSalary": 15000,
    "NationalityID": 1,
    "Gender": 0,
    "MonthlyObligation": 0.0,
    "CardTypeID": 0,
    "BankID": 0,
    "IsCashBack": true,
    "IsLoungeAccess": false,
    "IsNoAnualFee": false,
    "HasNoSalaryTransfer": true,
    "Shariah_Compliant": false,
    "AnnualFeeChk": false,
    "UserID": 0,
    "APRSorting": 0
  }
  constructor(private router: Router, private creditlyServices: CreditlyServicesService) { }

  async ngOnInit() {
    await this.creditlyServices.initToken();
    this.search()
  }
  addCompare() {

  }
  selectCard(id) {
    this.mainData.CardTypeID = id;
  }
  public showCardDetails(i) {
    this.showCardDetailsFlag = i;
    // this.product[i]['details']=true;
  }

  public applyForCreditCard(data): void {
    localStorage.setItem("selectedCard", JSON.stringify(data));
    this.router.navigateByUrl('creditly/applycard');
  }

  public navigateToCardsCompare(): void {
    this.router.navigateByUrl('creditly/cardsCompare');
  }
  radio(e) {
    this.NationalityID = e;
  }

  setValues(status, no, element, i, name) {
    //2
    if (status == true) {
      if (this.complainFilter.filter((val) => val.id == no).length == 0)
        this.complainFilter.push({ id: no, name, element });
      this.mainData[element] = true;
    } else if (status == false) {
      this.complainFilter.splice(i, 1);
      this.mainData[element] = false;
    }
    this.product = this.oriProduct.filter((item) => {
      for (let i = 0; i < this.complainFilter.length; i++) {
        if (item[this.FirstLetter(this.complainFilter[i]["element"])] === undefined || item[this.FirstLetter(this.complainFilter[i]["element"])] != this.mainData[this.complainFilter[i]["element"]])
          return false;
      }
      return true;
    });
  }
  FirstLetter(string: string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  search() {
    this.submit = true;
    this.finding = true;
    var randomNumber = Math.floor(Math.random() * 20000000 + 1);
    let req = {
      uUID: randomNumber.toString(),
      platformType: 1,
      systemInfo:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
    };
        let data = {
          "PageNumber": 1,
          "PageSize": 100,
          "WorkTypeID": this.profileDate?.userPersonalProfile?.workTypeID ?
            this.profileDate?.userPersonalProfile?.workTypeID :0,
          "NetSalary": this.mainData.NetSalary,
          "NationalityID": this.NationalityID,
          "Gender": 0,
          "MonthlyObligation": 0.0,
          "CardTypeID": this.mainData.CardTypeID,
          "BankID": 0,
          "IsCashBack": this.mainData.IsCashBack,
          "IsLoungeAccess": this.mainData.IsLoungeAccess,
          "IsNoAnualFee": this.mainData.IsNoAnualFee,
          "HasNoSalaryTransfer": true,
          "Shariah_Compliant": this.mainData.Shariah_Compliant,
          "AnnualFeeChk": false,
          "UserID": 0,
          "APRSorting": 0
        }
        this.product=[];
        this.creditlyServices.cardList(data).subscribe(val => {
          this.submit = false;
          this.product = val.products ? val.products : [];
          this.finding = false;
          this.oriProduct = val.products ? val.products : [];
        },err=>{
          this.finding = false;
          this.submit = false;
        })
  }
}
