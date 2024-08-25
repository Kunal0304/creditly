import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-auto-lease-car-info',
  templateUrl: './auto-lease-car-info.component.html',
  styleUrls: ['./auto-lease-car-info.component.scss']
})
export class AutoLeaseCarInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /* open vehicle infomation modal when we click on any of the car */
  public openVehicleInfoModal(): void {
    /*  $('#vehicleModal').modal({
       backdrop: 'static',/"
       
       
       
       
       "
       keyboard: false
   }); */
    let url = "/#/creditly/auto-lease/vehicelInfo";
    window.open(url);
    // this.router.navigateByUrl('/creditly/auto-lease/vehicelInfo');
  }

}
