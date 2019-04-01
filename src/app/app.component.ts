import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  name = 'Angular';
  showScroll: boolean;
  showScrollBottom:boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  upwardScrollHeight = 200;
  downwardScrollHeight = 600;

  constructor() {
    this.showScrollBottom = true;
   }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    // console.log('> ');
    //  console.log(window.pageYOffset);
    console.info("Scroll Event", window.pageYOffset);
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
      this.showScrollBottom = false;
    }
    else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
      this.showScrollBottom = true;
    }

  }
  ngOnInit(): void {

  }


  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
}
