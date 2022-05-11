import { Directive, OnInit, ElementRef } from '@angular/core';
import { TimelineMax } from 'gsap';
// import { CoreAnimationDirective } from './core-animation.directive';
import { CoreDirective } from './core.directive';

@Directive({
  selector: '[fadeInAnimation]',
})
export class FadeInAnimationDirective extends CoreDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {

    this.animateIn();
  }

  protected animateIn() {
    this.timeline.from(
      this.element.nativeElement,
      this.duration,
      { opacity: '0', ease: 'Expo.easeInOut' },
      this.delay
    );
    super.animateIn();
  }
}
