import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  @ViewChild('card', { static: true }) projectCard: ElementRef<HTMLDivElement>;

  projects = [
    {
      title: 'Join',
      description: 'kanban board',
      src: '../../../../assets/img/project/join-screen.png',
      link: 'http://peter-rehmann.developerakademie.com/Join-Kanban-Board/board.html',
      main: 'js',
    },
    {
      title: 'Portfolio',
      description: 'first personal portfolio webpage',
      src: '../../../../assets/img/project/Screenshot 2022-05-11 234003.png',
      link: 'https://rehmann-peter.de',
      main: 'angular',
    },
    {
      title: 'Ring of fire',
      description: 'card game',
      src: '../../../../assets/img/project/ringoffire.jpg',
      link: 'https://ring-of-fire-b4e13.web.app',
      main: 'angular',
    },
    {
      title: 'El pollo loco',
      description: 'become familiar with object orientation',
      src: '../../../../assets/img/project/elpolloloco.png',
      link: 'https://remarkable-hamster-c6f798.netlify.app',
      main: 'js',
    },
    {
      title: 'simple-crm',
      description: 'simple user management system',
      src: '../../../../assets/img/project/src.PNG',
      link: 'https://simple-crm-f0c6a.web.app/',
      main: 'angular',
    },

    {
      title: 'Quizapp',
      description: '',
      src: '../../../../assets/img/project/Screenshot 2022-05-11 205122.png',
      link: 'https://js-quizappzz1.netlify.app',
      main: 'js',
    },
    {
      title: 'Lieferando',
      description: 'simple shopping cart calculator',
      src: '../../../../assets/img/project/Screenshot 2022-05-11 210432.png',
      link: 'https://extraordinary-beignet-7625dc.netlify.app',
      main: 'js',
    },
    {
      title: 'Photogallery',
      description: '...',
      src: '../../../../assets/img/project/Screenshot 2022-05-11 221220.png',
      link: 'https://photo-gallery-df7052.netlify.app',
      main: 'js',
    },
  ];

  all: boolean = true;
  selected: boolean = false;

  clearedProjects = [];

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {
    this.clearedProjects = this.projects;
  }

  showAll() {
    this.clearedProjects = this.projects;
    console.log(this.clearedProjects);
  }
  showCategory(category: string) {
    this.clearedProjects = this.projects.filter(
      (project) => project.main === category
    );
    console.log(this.clearedProjects);
  }

  initScrollAnimations(): void {
    gsap.to(this.elementRef.nativeElement, {
      ScrollTrigger: {
        trigger: this.elementRef.nativeElement,
        y: 200,
        scrub: true,
        duration: 1.1,
        scale: 1.2,
        height: 250,
        start: '110% center',
      },
    });
  }
}
