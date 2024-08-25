import { Component } from '@angular/core';
import { CreditlyServicesService } from './creditly-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'creditly';
  randomNumber = Math.floor(Math.random() * 20000000 + 1);
  sessionResp: any;
  req = {
    uUID: this.randomNumber.toString(),
    platformType: 1,
    systemInfo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36"
  }
  constructor( private creditlyServices: CreditlyServicesService) { 
    console.log(creditlyServices.to)
  this.creditlyServices.generateSessionToken(this.req).subscribe((resp) => {
    this.sessionResp = resp
    if (this.sessionResp != undefined && this.sessionResp != null) {
            localStorage.setItem("token",this.sessionResp?.token);
            this.creditlyServices.master(this.sessionResp?.token).subscribe(val=>{
              localStorage.setItem("masterData",JSON.stringify(val));
            })
          }
        })
      }
    } 
