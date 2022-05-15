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
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  scrollPos = false;
  faAdjust = faAdjust;

  @ViewChild('menu', { static: true }) menu: ElementRef<HTMLUListElement>;


  isActive: boolean = true;
  offset: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public darkmodeService: DarkmodeService
  ) {}

  ngOnInit(): void {
    this.darkmodeService.initializeTheme();
    console.log('start')
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    number > 100 ? (this.offset = true) : (this.offset = false);
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

}
