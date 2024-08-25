import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  showEnglishLogo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  public selectLanguage(type): void {
    console.log("event language", type);
    if (type == "AR") {
      this.showEnglishLogo = true;
    } else {
      this.showEnglishLogo = false;
    }
  }

}
