import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrls: ['./financial-details.component.scss']
})
export class FinancialDetailsComponent implements OnInit {
  @Input() item = '';
  profileDate=JSON.parse(localStorage.getItem("loginResponse"));
  formGroup: FormGroup;
  loginFormValidationFlag: boolean = false;
  submit=false;
  cardLimits=[{value:0}];
  constructor(private ApiService:CreditlyServicesService) { }

  ngOnInit(): void {
    this.initForm();
    this.ApiService.subscribe().subscribe(value=>{
      this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
      if(this.formGroup.invalid){
        this.ApiService.validObject.financial=false;
      }else{
        this.ApiService.validObject.financial=true;
      }
    })
  }

  private initForm() {
    this.formGroup = new FormGroup({
        id:new FormControl(this.profileDate?.userPersonalEmployement?.id),
       userID:new FormControl(this.profileDate?.userPersonalEmployement?.userID),
       monthlyDeductions:new FormControl(this.profileDate?.userPersonalProfile?.monthlyDeductions, [Validators.required]),
       otherCardsLimits:new FormControl(this.profileDate?.userPersonalProfile?.otherCardsLimits?this.profileDate?.userPersonalProfile?.otherCardsLimits:0),
       monthlyExtraExpences:new FormControl(this.profileDate?.userPersonalProfile?.monthlyExtraExpences, [Validators.required]),
       dependencies:new FormControl(this.profileDate?.userPersonalProfile?.dependencies, [Validators.required]),
       currentDBR:new FormControl(this.profileDate?.userPersonalProfile?.currentDBR, [Validators.required]),
       housing:new FormControl(this.profileDate?.userPersonalProfile?.housing, [Validators.required]),
       utilities:new FormControl(this.profileDate?.userPersonalProfile?.utilities, [Validators.required]),
       fAndB:new FormControl(this.profileDate?.userPersonalProfile?.fAndB, [Validators.required]),
       householdAssistance:new FormControl(this.profileDate?.userPersonalProfile?.householdAssistance, [Validators.required]),
       expatFees:new FormControl(this.profileDate?.userPersonalProfile?.expatFees, [Validators.required]),
       transportation:new FormControl(this.profileDate?.userPersonalProfile?.transportation, [Validators.required]),
       communication:new FormControl(this.profileDate?.userPersonalProfile?.communication, [Validators.required]),
       tuitionFees:new FormControl(this.profileDate?.userPersonalProfile?.tuitionFees, [Validators.required]),
      healthcareAndInsurance:new FormControl(this.profileDate?.userPersonalProfile?.healthcareAndInsurance, [Validators.required]),
      isSave:new FormControl(true, [Validators.required])
    });
  }
  update(){
    console.log(this.formGroup.value)
    this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
    if(!this.loginFormValidationFlag){
      this.submit=true;
      this.ApiService.profileFinance(this.formGroup.value).subscribe(value=>{
        this.ApiService.refreshData();
      this.submit=false;
        this.ApiService.notify("Successfully updated","success");
      })
   }
  }
  otherLimits(i,e){
    this.cardLimits[i].value=parseFloat(e.target.value);
    let totalCardLimit=0;
    for(let x of this.cardLimits){
      totalCardLimit=totalCardLimit+x.value;
      console.log(x.value,totalCardLimit)
    }
    this.formGroup.patchValue({otherCardsLimits:totalCardLimit});
  }
  addCard(){
    this.cardLimits.push({value:0})
  }
  removeCard(i){
    this.cardLimits.splice(i,1);
    let totalCardLimit=0;
    for(let x of this.cardLimits){
      totalCardLimit=totalCardLimit+x.value;
      console.log(x.value,totalCardLimit)
    }
    this.formGroup.patchValue({otherCardsLimits:totalCardLimit});
  }
  valueSender(control:string){
    if(this.formGroup.controls[control].value && this.formGroup.controls[control].value!==""){
      return parseFloat(this.formGroup.controls[control].value);
    }else{
      return 0;
    }
  }
  obligationsCalculation(){
    let totalObligation=0;
    let arr=[
      "housing",
      "fAndB",
      "expatFees",
      "communication",
      "healthcareAndInsurance",
      "utilities",
      "householdAssistance",
      "transportation",
      "tuitionFees",
    ]
    for(let a of arr){
      totalObligation=totalObligation + this.valueSender(a);
    }
    this.formGroup.patchValue({monthlyExtraExpences:totalObligation})
  }
}
