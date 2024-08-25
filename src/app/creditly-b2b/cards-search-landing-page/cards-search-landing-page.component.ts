import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-cards-search-landing-page',
  templateUrl: './cards-search-landing-page.component.html',
  styleUrls: ['./cards-search-landing-page.component.scss'],
})
export class CardsSearchLandingPageComponent implements OnInit {
  value: number = 60000;
  options: Options = {
    floor: 3000,
    ceil: 200000,
  };

  value1: number = 60000;
  options1: Options = {
    floor: 3000,
    ceil: 200000,
  };

  value2: number = 2;
  options2: Options = {
    floor: 1,
    ceil: 5,
  };
  showPasswordFlag: boolean = false;
  showEnglishLogo: boolean = false;

  formGroup: FormGroup;
  sessionResp: any;
  loginFormValidationFlag: boolean = false;
  submit: boolean = false;
  constructor(
    private router: Router,
    private creditlyServices: CreditlyServicesService
  ) {
    this.initForm();
  }
  public goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  public selectLanguage(type): void {
    if (type == "AR") {
      this.showEnglishLogo = true;
    } else {
      this.showEnglishLogo = false;
    }
  }
  ngOnInit(): void {}
  private initForm() {
    this.formGroup = new FormGroup({
      Mobile: new FormControl('', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      password: new FormControl('', [Validators.required]),
    });
  }
  public navigateToRegister(): void {
    this.router.navigateByUrl('/register');
  }

  public gotoCardsList() {
    this.router.navigateByUrl('/creditly/cards-list');
  }

  private getStarted(): void {
    if(this.formGroup.controls["Mobile"].valid)
    this.showPasswordFlag = true;
    else{
    this.creditlyServices.notify("Please enter valid mobile number","error");
    this.loginFormValidationFlag=true;}
  }

  private login(): void {
    this.router.navigateByUrl('userProfile');
  }
  public generateSessionToken(): void {
    var randomNumber = Math.floor(Math.random() * 20000000 + 1);
    // let randomNumber = Math.random();
    let req = {
      uUID: randomNumber.toString(),
      platformType: 1,
      systemInfo:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
    };

    this.creditlyServices.generateSessionToken(req).subscribe((resp) => {
      this.sessionResp = resp;
    });

    return this.sessionResp?.token;
  }

  loginProcess() {
    this.loginFormValidationFlag = this.formGroup.invalid ? true : false;
    if (!this.loginFormValidationFlag) {
      this.submit=true;
      var randomNumber = Math.floor(Math.random() * 20000000 + 1);
      let req = {
        uUID: randomNumber.toString(),
        platformType: 1,
        systemInfo:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
      };

      this.creditlyServices.generateSessionToken(req).subscribe((resp) => {
        this.sessionResp = resp;
        if (this.sessionResp != undefined && this.sessionResp != null) {
          this.creditlyServices
            .login(this.formGroup.value, this.sessionResp?.token)
            .subscribe((result) => {
              if (result != null && result != undefined) {
                localStorage.setItem("loginResponse",JSON.stringify(result));
                localStorage.setItem('token', this.sessionResp?.token);
                if(result?.userSessions?.length){
                    localStorage.setItem("sessionToken",result?.userSessions[0]?.token);
                    this.creditlyServices.notify("Successfully logged in...","success");
                    this.creditlyServices.to="Profile";
                    this.router.navigateByUrl('/userProfile');
                }else{
                  this.submit=false;
                  this.creditlyServices.notify(result.message,"error");
                }
              } else
                this.creditlyServices.notify(
                  'Oops! something went wrong...',
                  'error'
                );
            });
        }
      });
    }
  }
}
