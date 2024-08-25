import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditlyServicesService } from '../creditly-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  sessionResp: any;
  loginFormValidationFlag: boolean = false;
  submit: boolean = false;
  constructor(private router: Router, private creditlyServices: CreditlyServicesService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      Mobile: new FormControl('', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      password: new FormControl('', [Validators.required])
    });
  }

  public gotoCardsSearchPage() {
    this.router.navigateByUrl('creditly/cards-search');
  }

  public generateSessionToken(): void {
    var randomNumber = Math.floor(Math.random() * 20000000 + 1);  
    let req = {
      uUID: randomNumber.toString(),
      platformType: 1,
      systemInfo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36"
    }

    this.creditlyServices.generateSessionToken(req).subscribe((resp) => {
      console.log("generateSessionToken resp", resp);
      this.sessionResp = resp
    })

    return this.sessionResp?.token;

  }

  loginProcess() {
    this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
    if(!this.formGroup.controls["Mobile"].valid)
    this.creditlyServices.notify("Please enter valid mobile number","error");
    if (!this.loginFormValidationFlag) {
      this.submit=true;
      var randomNumber = Math.floor(Math.random() * 20000000 + 1);
      let req = {
        uUID: randomNumber.toString(),
        platformType: 1,
        systemInfo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36"
      }

      this.creditlyServices.generateSessionToken(req).subscribe((resp) => {
        this.sessionResp = resp
        if (this.sessionResp != undefined && this.sessionResp != null) {
          this.creditlyServices.login(this.formGroup.value, this.sessionResp?.token).subscribe(result => {
            if (result != null && result != undefined) {
              localStorage.setItem("loginResponse",JSON.stringify(result));
              // localStorage.setItem("token",this.sessionResp?.token);
              localStorage.setItem("token",result?.userSessions[0].token);
              if(result?.userSessions?.length){
                  localStorage.setItem("sessionToken",result?.userSessions[0]?.token);
                  this.creditlyServices.to="Profile";
                  this.router.navigateByUrl('/userProfile');
              }else{
                this.submit=false;
                this.creditlyServices.notify(result.message,"error");
              }
            } 
          },err=>{
            this.submit=false;
            this.creditlyServices.notify("Oops! something went wrong...","error");
          })
        }
      })

    }
  }

}
