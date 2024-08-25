import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.scss']
})
export class EmploymentDetailsComponent implements OnInit {
  @Input() item = '';
  showOccupationFalg: boolean = false;
  profileDate=JSON.parse(localStorage.getItem("loginResponse"));
  workTypes=JSON.parse(localStorage.getItem("masterData"))?.workTypes;
  sourceOfIncomes=JSON.parse(localStorage.getItem("masterData"))?.sourceOfIncomes;
  formGroup: FormGroup;
  loginFormValidationFlag: boolean = false;
  workTypesValue="select";
  otherSourceIType="select";
  SourceIType="select";
  submit=false;
  calci=false
  constructor(private ApiService:CreditlyServicesService) { }
  ngOnInit(): void {
    this.initForm();
    this.ApiService.subscribe().subscribe(value=>{
      this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
      if(this.formGroup.invalid){
        this.ApiService.validObject.employment=false;
      }else{
        this.ApiService.validObject.employment=true;
      }
    })
  }
  UserIncomeStrategy(){
    let data={
      "WorkTypeID":3,
      "NationalityID":this.profileDate?.userPersonalProfile?.nationalities?this.profileDate?.userPersonalProfile?.nationalityID:0,
      "MonthlyBasicIncome":parseInt(this.formGroup.value.monthlyBasicIncome),
      "OtherAllowences":parseInt(this.formGroup.value.otherAllowences),
      "HousingAllowance":parseInt(this.formGroup.value.housingAllowance),
      "TransportationAllowance":parseInt(this.formGroup.value.transportationAllowance),
      "UserId":this.profileDate?.userPersonalEmployement?.userID
    }
    this.submit=true;
    this.calci=true;
    this.ApiService.UserIncomeStrategy(data).subscribe(res=>{
      this.formGroup.patchValue({
        netSalary:res.netSalary,
        grossSalary:res.grossSalary,
      })
      this.submit=false;
      this.calci=false;
    })
  }

  public changeWorkSelector(eve): void {
    if(eve.target.value != 'Military' ) {
      this.showOccupationFalg= true;
    } else {
      this.showOccupationFalg = false;
    }
  }

  change(event){
    // this.type=this.resType[event.target.value];
   }
  private initForm() {
    this.formGroup = new FormGroup({
        id:new FormControl(this.profileDate?.userPersonalEmployement?.id),
       userID:new FormControl(this.profileDate?.userPersonalEmployement?.userID),
       workTypeID:new FormControl(this.profileDate?.userPersonalProfile?.workTypeID, [Validators.required]),
       monthlyBasicIncome:new FormControl(this.profileDate?.userPersonalProfile?.monthlyBasicIncome, [Validators.required]),
       monthlyExtraIncome:new FormControl(this.profileDate?.userPersonalProfile?.monthlyExtraIncome, [Validators.required]),
       otherAllowences:new FormControl(this.profileDate?.userPersonalProfile?.otherAllowences, [Validators.required]),
       occupation:new FormControl(this.profileDate?.userPersonalProfile?.occupation, [Validators.required]),
       housingAllowance:new FormControl(this.profileDate?.userPersonalProfile?.housingAllowance, [Validators.required]),
       transportationAllowance:new FormControl(this.profileDate?.userPersonalProfile?.transportationAllowance, [Validators.required]),
       netSalary:new FormControl(this.profileDate?.userPersonalProfile?.netSalary),
       retireeAgeAndMilitaryRankId:new FormControl(0, [Validators.required]),
       sourceOfIncomeID:new FormControl(this.profileDate?.userPersonalProfile?.sourceOfIncomeID, [Validators.required]),
       otherSourceOfIncomeID:new FormControl(this.profileDate?.userPersonalProfile?.otherSourceOfIncomeID?this.profileDate?.userPersonalProfile?.otherSourceOfIncomeID:0, [Validators.required]),
       grossSalary:new FormControl(this.profileDate?.userPersonalProfile?.grossSalary),
       isSave:new FormControl(true, [Validators.required]),
    });
    this.workTypesValue=this.workTypes.filter(val=>val.id==this.profileDate?.userPersonalProfile?.workTypeID)[0]?.name;
    this.SourceIType=this.sourceOfIncomes.filter(val=>val.id==this.profileDate?.userPersonalProfile?.sourceOfIncomeID)[0]?.name;
    this.otherSourceIType=this.sourceOfIncomes.filter(val=>val.id==this.profileDate?.userPersonalProfile?.otherSourceOfIncomeID)[0]?.name;
  }
filter(event){
  let id = event.target.value
  this.formGroup.patchValue({workTypeID:parseInt(id)});
  this.workTypesValue= this.workTypes.filter(val=>val.id==id)[0]?.name;
  if(this.workTypesValue == 'Governmental military' ) {
    this.showOccupationFalg= true;
  } else {
    this.showOccupationFalg = false;
  }
}
filterSource(event){
  let id = event.target.value
  this.formGroup.patchValue({sourceOfIncomeID:parseInt(id)});
  this.SourceIType= this.sourceOfIncomes.filter(val=>val.id==id)[0].name;
 }
 otherfilterSource(event){
  let id = event.target.value
  this.formGroup.patchValue({otherSourceOfIncomeID:parseInt(id)});
  this.otherSourceIType= this.sourceOfIncomes.filter(val=>val.id==id)[0].name;
 }
 update(){
   this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
   if(!this.loginFormValidationFlag){
    this.submit=true;
    this.ApiService.profileEmployment(this.formGroup.value).subscribe(value=>{
      this.ApiService.refreshData();
    this.submit=false;
      this.ApiService.notify("Successfully updated","success");
    })
   }else{
    this.submit=false;
    this.ApiService.notify("Please fill all required fileds","error");
   }
 }
}
