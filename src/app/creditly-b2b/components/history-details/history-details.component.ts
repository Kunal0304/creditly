import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss'],
  
})
export class HistoryDetailsComponent implements OnInit {
 
  constructor() { }

  slides = [];

  slideConfig = {
    centerPadding: '10px',
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "",
    prevArrow: "",
    dots: false,
    infinite: false,
    autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
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

  ngOnInit(): void {
  }

}
