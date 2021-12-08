import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { faAdjust } from '@fortawesome/free-solid-svg-icons';

import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'light-theme' | 'dark-theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  scrollPos = false;
  faAdjust = faAdjust;

  @ViewChild('menu', { static: true }) menu: ElementRef<HTMLUListElement>;

  theme: Theme = 'light-theme';
  isActive: boolean = true;
  offset: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.initializeTheme();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    // number > 100 ? (this.scrollPos = true) : (this.scrollPos = false);
    if (number > 100) {
      this.offset = true;
    } else {
      this.offset = false;
    }
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

  initializeTheme = (): void => this.renderer.addClass(this.document.body, this.theme);

}
