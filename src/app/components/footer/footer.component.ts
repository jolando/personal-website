import { Component, HostListener, OnInit } from '@angular/core';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXing } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faXing = faXing;
  faGithub = faGithub;

  constructor() {}

  ngOnInit(): void {}

  scrollToTop() {
    window.scroll(0, 0);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (screenY > 200) {
    }
    console.log('Scrolling!');
  }
}
