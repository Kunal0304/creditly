import { Component, HostListener, OnInit } from '@angular/core';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showEnglishLogo: boolean = false;
  applyStickyStyles: boolean = false;

  @HostListener('window:scroll', ['$event'])


  scrollHandler(event) {
    // Get the navbar
    var navbar = document.getElementById("myHeader");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      // navbar.classList.add("sticky")
      this.applyStickyStyles = true;
    } else {
      // navbar.classList.remove("sticky");
      this.applyStickyStyles = false;
    }
  }

  constructor(public service : CreditlyServicesService) { }

  ngOnInit(): void {

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
