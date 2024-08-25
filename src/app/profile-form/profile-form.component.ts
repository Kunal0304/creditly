import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  profileDate=JSON.parse(localStorage.getItem("loginResponse"));
  // bank
  banks=JSON.parse(localStorage.getItem("masterData")).banks;
  showCardDetailsFlag: boolean = false;
  bankType="select";
  loginFormValidationFlag:boolean=false;
  bankGroup: FormGroup;

  product=[JSON.parse(localStorage.getItem("selectedCard"))]
  constructor() { }

  ngOnInit(): void {
    this.bankForm()
  }
  private bankForm() {
    this.bankGroup = new FormGroup({
       userID:new FormControl(this.profileDate?.userPersonalEmployement?.userID),
       bankAccountID:new FormControl(this.profileDate?.userBankAccount?.bankAccountID, [Validators.required]),
       iBAN:new FormControl(this.profileDate?.userBankAccount?.iban, [Validators.required]),
       isSave:new FormControl(true, [Validators.required]),
    });
    this.bankGroup=this.banks.filter(val=>val.id==this.profileDate?.userBankAccount?.bankAccountID)[0].name;
  }
  filter(event){
    let id = event.target.value
    // this.bankGroup.patchValue({bankAccountID:parseInt(id)});
    this.bankType= this.banks.filter(val=>val.id==id)[0].name;
  }
  apply(){
  }
}
