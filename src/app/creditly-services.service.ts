import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { $, promise } from 'protractor';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotifierService } from 'angular-notifier';
// import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreditlyServicesService {
  private subject = new Subject<any>();
  private readonly notifier: NotifierService;
  baseUrl = environment.baseUrl;
  mainBaseUrl = environment.mainBaseUrl;
  headers = new HttpHeaders();
  to = "";
  req = {
    uUID: Math.floor(Math.random() * 20000000 + 1).toString(),
    platformType: 1,
    systemInfo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36"
  }
  validObject: { bank: boolean; contact: boolean; employment: boolean; financial: boolean } = { bank: false, contact: false, employment: false, financial: false };
  constructor(private http: HttpClient, notifierService: NotifierService) {
    this.notifier = notifierService;
    this.to = localStorage.getItem("sessionToken") ? "Profile" : "Login";
    this.headers = this.headers
      .set(
        'Authorization',
        'API_User_Auth ' +
        'JGNyZWRpdGx5d2ViYXBpOmUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNl'
      )
      .set('API_Key', '5A2A6A7E-F86F-4877-83D3-9')
      .set('APP_Type', '1')
      .set('APP_Code', 'CR1T1')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'en');
  }
  change(value) {
    this.subject.next(value);
  }

  subscribe(): Observable<any> {
    return this.subject.asObservable();
  }
  public generateSessionToken(data): Observable<any> {
    let headers = this.headers.set('Token', 'bb20c0eb6075e1127022d303f1e377fd');
    return this.http.post(this.baseUrl + 'init', data, { headers: headers });
  }

  login(data, token): Observable<any> {
    let headers = this.headers.set('Token', token);
    localStorage.setItem("refreshRequest",`Barear.zzw.${data.password}.zzw.${data.Mobile}`)
    return this.http.post(`${this.baseUrl}login`, data, { headers: headers });
  }
  refreshData(){
    let value=localStorage.getItem("refreshRequest").split(".zzw.");
    let obj={Mobile:value[2],password:value[1]};
    this.generateSessionToken(this.req).subscribe((resp) => {
      if (resp != undefined && resp != null) {
        this.login(obj, resp?.token).subscribe(result => {
          if (result != null && result != undefined) {
            localStorage.setItem("loginResponse",JSON.stringify(result));
          }
        })
      }
    });
  }
  public initToken() {
    return new Promise((resolve, reject) => {
      this.generateSessionToken(this.req).subscribe((resp) => {
        let sessionResp = resp
        if (sessionResp != undefined && sessionResp != null) {
          resolve(true);
          localStorage.setItem("token", sessionResp?.token);
        }
      }, err => {
        reject(false);
      })
    })
  }
  registerFirstStep(data, token): Observable<any> {
    localStorage.setItem('regSessionToken', token);
    let headers = this.headers.set('Token', token);
    return this.http.post(`${this.baseUrl}register`, data, {
      headers: headers,
    });
  }
  registerSubStep(data): Observable<any> {
    let headers = this.headers.set(
      'Token',
      localStorage.getItem('regSessionToken')
    );
    return this.http.post(`${this.baseUrl}register`, data, {
      headers: headers,
    });
  }
  master(token: string): Observable<any> {
    let headers = this.headers.set(
      'Token',
      token
    );
    return this.http.get(`${this.mainBaseUrl}Index/masters`, { headers: headers });
  }
  profileContact(data): Observable<any> {
    let headers = this.headers.set(
      'Token',
      localStorage.getItem('sessionToken')
    );
    return this.http.post(`${this.mainBaseUrl}user/profile/updateContact`, data, {
      headers: headers,
    });
  }
  profileEmployment(data): Observable<any> {
    let headers = this.headers.set(
      'Token',
      localStorage.getItem('sessionToken')
    );
    return this.http.post(`${this.mainBaseUrl}user/profile/updateEmployment`, data, {
      headers: headers,
    });
  }
  profileBank(data): Observable<any> {
    let headers = this.headers.set(
      'Token',
      localStorage.getItem('sessionToken')
    );
    return this.http.post(`${this.mainBaseUrl}user/profile/updateBank`, data, {
      headers: headers,
    });
  }
  profileFinance(data): Observable<any> {
    let headers = this.headers.set(
      'Token',
      localStorage.getItem('sessionToken')
    );
    return this.http.post(`${this.mainBaseUrl}user/profile/updateFinance`, data, {
      headers: headers,
    });
  }
  cardList(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    return this.http.post(`${this.mainBaseUrl}Card/list`, data, {
      headers: headers,
    });
  }
  financeList(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    return this.http.post(`${this.mainBaseUrl}Loan/list`, data, {
      headers: headers,
    });
  }
  verification(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    return this.http.post(`${this.mainBaseUrl}session/register/validation`, data, {
      headers: headers,
    });
  }

  notify(msg, status) {
    this.notifier.notify(status, msg);
  }



  /* Auto Loans */

  public getAutoLoansList(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    try {
      return this.http.post(this.mainBaseUrl + "Auto/list", data, { headers: headers })
    } catch (error) {
      return error;
    }
  }

  public calculateNetSalaryAutoLoans(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('token'));
    try {
      return this.http.post(this.mainBaseUrl + "user/UserIncomeStrategy", data, { headers: headers })
    } catch (error) {
      return error;
    }
  }
  UserIncomeStrategy(data): Observable<any> {
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken'));
    return this.http.post(`${this.mainBaseUrl}/user/UserIncomeStrategy`, data, {
      headers: headers,
    });
  }
  /* Auto Loans */
}
