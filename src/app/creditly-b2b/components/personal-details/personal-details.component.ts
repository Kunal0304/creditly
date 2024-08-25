import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  profileDate=JSON.parse(localStorage.getItem("loginResponse"));
  constructor() { }

  ngOnInit(): void {
  }

  filter(data:Array<{id?:number;name?:string}>,id:number | string){
    if(data?.length && data?.filter(val=>val.id==id)[0]?.name)
    return data.filter(val=>val.id==id)[0].name;
    else
    return "NA";
  }
}
