import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent implements OnInit {
  faChevronDown = faChevronDown;

  @ViewChild('personalImg', { static: true })
  personalImg: ElementRef<HTMLImageElement>;

  constructor() {}

  ngOnInit(): void {
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    gsap.to(this.personalImg.nativeElement, {
      ScrollTrigger: {
        trigger: this.personalImg.nativeElement,
        scrub: true,
        duration: 1.1,
        scale: 1.2,
        height: 250,

        start: '110% center',
      },
    });
  }
}
