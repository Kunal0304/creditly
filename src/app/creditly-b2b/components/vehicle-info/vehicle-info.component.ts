import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {
  public value: number = 100;
  public options: Options = {
    floor: 0,
    ceil: 200
  };

  slides = [];

  slideConfig = {
    centerPadding: '10px',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: "<div class='slick-next'></div>",
    prevArrow: "<div class='slick-prev'></div>",
    dots: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
  constructor() { }

  ngOnInit(): void {
  }

}
