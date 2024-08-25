import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss']
})
export class MortgageComponent implements OnInit {
  loanUnitTypes = JSON.parse(localStorage.getItem('masterData'))?.loanUnitTypes;
  formGroup: FormGroup;
  profileDate = JSON.parse(localStorage.getItem('loginResponse'));
  value1: number = 60000;
  options1: Options = {
    floor: 3000,
    ceil: 200000
  };

  value2: number = 2;
  options2: Options = {
    floor: 1,
    ceil: 5
  };

  value: number = 60000;
  options: Options = {
    floor: 3000,
    ceil: 200000
  };
  loansTypeID: number = 0;
  banks = JSON.parse(localStorage.getItem('masterData'))?.banks;
  finding = false;
  loans: Array<any> = JSON.parse(localStorage.getItem('masterData'))?.loans;
  showCardDetailsFlag: string = "_";
  workTypesValue = 'select';
  financeProduct: Array<any> = [];
  complainFilter: Array<any> = [];
  workTypes = JSON.parse(localStorage.getItem('masterData'))?.workTypes;
  FormValidationFlag = false;
  orifinanceProduct: Array<any> = [];

  constructor(private apiService: CreditlyServicesService) { }

  private initForm() {
    this.formGroup = new FormGroup({
      PageNumber:new FormControl(1),
      PageSize:new FormControl(50),
      WorkTypeID:new FormControl(this.profileDate?.userPersonalProfile?.workTypeID?this.profileDate?.userPersonalProfile?.workTypeID:0, [Validators.required]),
      NetSalary:new FormControl( this.profileDate?.userPersonalProfile?.netSalary?this.profileDate?.userPersonalProfile?.netSalary:15000.00),
      NationalityID:new FormControl(this.profileDate?.userPersonalProfile?.nationalityID?this.profileDate?.userPersonalProfile?.nationalityID: 0),
      DownPayment:new FormControl(0),
      Gender:new FormControl(1),
      Period:new FormControl(3),
      MonthlyObligation:new FormControl(0),
      LoanTypeID:new FormControl(this.loansTypeID),
      BankID:new FormControl(this.profileDate?.userBankAccount?.bankAccountID
        ? this.profileDate?.userBankAccount?.bankAccountID
        : 0, [Validators.required]),
      LoanUnitTypeID:new FormControl(0 , [Validators.required]),
      LoanCategoryMasterID:new FormControl(0),
      Murabaha:new FormControl(true),
      Tawaruq:new FormControl(false),
      HasNoSalaryTransfer:new FormControl(true),
      SupportedByREDF:new FormControl(false),
      Shariah_Compliant:new FormControl(false),
      LoanAmount:new FormControl(0),
      MaxLoanAmount:new FormControl(0),
      MaxPeriod:new FormControl(0),
      MinLoanAmount:new FormControl(0),
      MinPeriod:new FormControl(0),
      AnnualFeeChk:new FormControl(false),
      UserID:new FormControl(this.profileDate?.userPersonalProfile?.userID?this.profileDate?.userPersonalProfile?.userID:0, [
        Validators.required,
      ]),
      APRSorting:new FormControl(0),
    });
  }

  setLoanType(type) {
    // this.loans.filter(val=>val.name==type)[0].id
    this.loansTypeID = type;
  }
  FilterValue(id, array) {
    return array?.filter((val) => val.name == "Management Fees")[0]?.value
      ? array?.filter((val) => val.name == "Management Fees")[0]?.value
      : 0;
  }

  filterDate(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ BankID: parseInt(id) });
  }

  filter(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ LoanUnitTypeID: parseInt(id) });
  }
  filterWork(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ WorkTypeID: parseInt(id) });
  }
  filterBank(event) {
    let id = event.target.value;
    this.formGroup.patchValue({ BankID: parseInt(id) });
  }
  async ngOnInit() {
    await this.apiService.initToken();
    this.initForm();
    this.findFinance();
    this.setAllAttribute()
  }
  setAllAttribute(){
    if(this.workTypes)this.workTypes.push({id:0,name:"All"});
    if(this.loans)this.loans.push({id:0,name:"All"});
    if(this.banks)this.banks.push({id:0,name:"All"});
    if(this.loanUnitTypes)this.loanUnitTypes.push({id:0,name:"All"});
  }
  setValues(status,no,element,i,name){
    //2
    if ( status == true) {
      if (this.complainFilter.filter((val) => val.id == no).length == 0)
        this.complainFilter.push({ id: no, name ,element });
        let value= this.formGroup.value;
        value[element]=true;
        this.formGroup.setValue({...value});

    } else if ( status == false) {
      this.complainFilter.splice(i, 1);
      let value= this.formGroup.value;
        value[element]=false;
        this.formGroup.setValue({...value});
    }
    this.financeProduct= this.orifinanceProduct.filter((item)=> { 
      for (let i = 0; i < this.complainFilter.length; i++) {
        let ele=this.complainFilter[i]["element"];
        if (item[ this.FirstLetter(ele=="SupportedByREDF"?"supportByREDF":ele)] === undefined || item[this.FirstLetter(ele=="SupportedByREDF"?"supportByREDF":ele)] != this.formGroup.controls[ele].value)
          return false;
      }
      return true;
    });
}
FirstLetter(string:string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
  }
  radio(id) {
    this.formGroup.patchValue({ NationalityID:  parseInt(id) });
  }
  findFinance() {
    let data = this.formGroup.value;

      this.finding = true;
      this.FormValidationFlag = false;
      this.financeProduct = [];
      console.log("data req",data);
      this.apiService.financeList(data).subscribe(
        (val) => {
          this.financeProduct = val?.products?val?.products:[];
          this.orifinanceProduct = val?.products?val?.products:[];
          this.finding = false;
          console.log(val);
        },
        (err) => (this.finding = false)
      );
  }
  public showCardDetails(i) {
    this.showCardDetailsFlag = i;
  }
  Salary(val: boolean): void {
    this.formGroup.patchValue({ HasNoSalaryTransfer: val });
  }
}
