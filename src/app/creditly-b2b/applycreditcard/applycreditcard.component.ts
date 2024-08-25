import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-applycreditcard',
  templateUrl: './applycreditcard.component.html',
  styleUrls: ['./applycreditcard.component.scss']
})
export class ApplycreditcardComponent implements OnInit {
  profileDate=JSON.parse(localStorage.getItem("loginResponse"));
  // bank
  banks=JSON.parse(localStorage.getItem("masterData")).banks;
  showCardDetailsFlag: boolean = false;
  bankType="select";
  loginFormValidationFlag:boolean=false;
  bankGroup: FormGroup;

  product=[JSON.parse(localStorage.getItem("selectedCard"))]
  
  employGroup: FormGroup;
  financeGroup: FormGroup;
  contactGroup: FormGroup;

  constructor(private router: Router,private apiService:CreditlyServicesService) { 
  }

  ngOnInit(): void {
  }

 
  filter(event){
    let id = event.target.value
    // this.bankGroup.patchValue({bankAccountID:parseInt(id)});
    this.bankType= this.banks.filter(val=>val.id==id)[0].name;
  }
  ////bank section
  public showCardDetails() {
    this.showCardDetailsFlag = !this.showCardDetailsFlag;
  }
  checkError(){
    let message=[];
    for (const [key, value] of Object.entries(this.apiService.validObject)) {
      console.log(`${key}: ${value}`);
      if(value==false){
        message.push(key);
      }
    }
    if(message.length==0)
    return true;
    else{
      this.apiService.notify("please fill requried fields in " + message.join(",") + " details", "error")
      return false;
    }
  }

  public apply(): void {
    this.apiService.change(true);
    this.checkError()
    //this.router.navigateByUrl('/cc-otp');
  }

}
