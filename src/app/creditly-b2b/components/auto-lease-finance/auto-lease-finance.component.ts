import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-auto-lease-finance',
  templateUrl: './auto-lease-finance.component.html',
  styleUrls: ['./auto-lease-finance.component.scss']
})
export class AutoLeaseFinanceComponent implements OnInit {
  public value: number = 100;
  public options: Options = {
    floor: 0,
    ceil: 200
  };

  autoLeaseFinanceForm: FormGroup;
  masterData = JSON.parse(localStorage.getItem('masterData'));
  userData = JSON.parse(localStorage.getItem('loginResponse'));
  workTypesList = [];
  finalNetSalary: any;
  nationality: any;
  salaryTransferFlag: boolean = true;
  calculateNetSalaryResp: any;
  autoLoansList: any;

  constructor(private fb: FormBuilder,
    private creditlyServeices: CreditlyServicesService) { }

  ngOnInit(): void {
    this.workTypesList = this.masterData.workTypes;
    // if()
    this.finalNetSalary = this.userData?.userPersonalProfile?.netSalary?this.userData.userPersonalProfile.netSalary:15000;
    this.nationality = this.userData?.userPersonalProfile?.nationalityID?this.userData?.userPersonalProfile?.nationalityID:0;
    this.loadAutoLeaseFom();
    // this.calculateNetsalary();
    
    this.findAutoFinance();
  }

  public calculateNetsalary(): void {
    let req = {
      WorkTypeID: this.userData?.userPersonalProfile?.workTypeID,
      NationalityID: this.nationality,
      MonthlyBasicIncome: this.userData?.userPersonalProfile?.monthlyBasicIncome,
      OtherAllowences: this.userData?.userPersonalProfile?.otherAllowences,
      HousingAllowance: this.userData?.userPersonalProfile?.housingAllowance,
      TransportationAllowance: this.userData?.userPersonalProfile?.transportationAllowance,
      UserId: this.userData?.id
    }
    this.creditlyServeices.calculateNetSalaryAutoLoans(req).subscribe((netSalaryResp) => {
      console.log("netSalaryResp resp" , netSalaryResp);
      if(netSalaryResp.statusReply.statusCode == 200) {
        this.calculateNetSalaryResp = netSalaryResp;
        this.finalNetSalary = this.calculateNetSalaryResp?.netSalary;
        // this.findAutoFinance(); 
      }
    })

    return this.finalNetSalary;
  }

  public handlerFromSaudi(val): void {
    this.nationality = parseInt(val);
  }

  public handlerSalaryTransfer(val): void {
    this.salaryTransferFlag = true;
  }

  public loadAutoLeaseFom() {
    this.autoLeaseFinanceForm = this.fb.group({
      // this.finalNetSalary
      netSalary: [this.finalNetSalary == 0 ? this.calculateNetsalary(): this.finalNetSalary],
      financeAmount: [0],
      financePeriod: [0],
      downPayment: [0],
      lastPayment: [0],
      workType: [0],
    });
  }

  public findAutoFinance(): void {

    let req = {
      PageNumber: 1,
      PageSize: 50,
      WorkTypeID: this.autoLeaseFinanceForm.value.workType,
      NetSalary: this.autoLeaseFinanceForm.value.netSalary,
      NationalityID: this.nationality,
      DownPayment: this.autoLeaseFinanceForm.value.downPayment,
      LastPayment: this.autoLeaseFinanceForm.value.lastPayment,
      Gender: this.userData?.gender?this.userData?.gender:0,
      Period: this.autoLeaseFinanceForm.value.financePeriod,
      MonthlyObligation: this.userData?.userPersonalProfile?.monthlyExtraExpences?this.userData?.userPersonalProfile?.monthlyExtraExpences:0,
      AutoMainID: 0,
      VehicleConditionTypeID: 0,
      BankID: 0,
      HasNoSalaryTransfer: this.salaryTransferFlag,
      SupportedByREDF: false,
      Shariah_Compliant: false,
      LoanAmount: this.autoLeaseFinanceForm.value.financeAmount,
      UserID: this.userData?.id?this.userData?.id:0
    }

    console.log("req",req);

    this.creditlyServeices.getAutoLoansList(req).subscribe((autoLoansResp) => {
      console.log("autoLoansResp", autoLoansResp);
      if(autoLoansResp.responseStatusCode == 0) {
        this.autoLoansList = autoLoansResp.vehicleFinance
      }
    })
  }


}
