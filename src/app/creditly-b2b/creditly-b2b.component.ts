import { Component, OnInit } from '@angular/core';
import { CreditlyServicesService } from '../creditly-services.service';

@Component({
  selector: 'app-creditly-b2b',
  templateUrl: './creditly-b2b.component.html',
  styleUrls: ['./creditly-b2b.component.scss']
})
export class CreditlyB2bComponent implements OnInit {

  constructor(private apiService:CreditlyServicesService) { }

 async ngOnInit() {
   if(!localStorage.getItem("token"))
   await this.apiService.initToken();
  }

}
