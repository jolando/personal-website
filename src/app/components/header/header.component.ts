import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';

import { gsap } from 'gsap';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrollPos = false;
  faAdjust = faAdjust;


  @ViewChild('menu', {static: true}) menu: ElementRef<HTMLUListElement>



  theme: Theme = 'light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}


  ngOnInit(): void {
    this.initAnimations();
    this.initializeTheme();

  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    number > 100 ? this.scrollPos = true : this.scrollPos = false;

  }





  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);


    initAnimations():void {
      gsap.from(this.menu.nativeElement.childNodes, {
        duration: 0.2,
        opacity: 0,
        y: -5,
        stagger: 0.2,
        delay: 0.2,
      })

    }
}







export type Theme = 'light-theme' | 'dark-theme';
