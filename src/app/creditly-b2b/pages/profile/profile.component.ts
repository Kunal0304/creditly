import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router,private service:CreditlyServicesService) { }
  public currentTab='profile';
  
  slides = [];

  slideConfig = {
    centerPadding: '10px',
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='slick-next'></div>",
    prevArrow: "<div class='slick-prev'></div>",
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    'responsive': [
      {
        'breakpoint': 1024,
        'settings': {
          'slidesToShow': 3,
        }
      },
      {
        'breakpoint': 600,
        'settings': {
          'slidesToShow': 2,
        }
      },
      {
        'breakpoint': 480,
        'settings': {
          'slidesToShow': 1,
        }
      }
    ]
  };

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  ngOnInit(): void {
  }

  logout():void{
    let masterData=localStorage.getItem("masterData");
    localStorage.clear();
    localStorage.setItem('masterData',masterData);
    this.service.to="Login";
    this.router.navigateByUrl("/login");
  }

}
