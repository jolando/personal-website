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
      title: 'simple-crm',
      description: 'simples Nutzerverwaltungssystem',
      src: '../../../../assets/img/project/src.PNG',
      main: 'angular',
    },
    {
      title: 'Ring of fire',
      description: 'simples Kartenspiel',
      src: '../../../../assets/img/project/ringoffire.jpg',
      main: 'angular',
    },
    {
      title: 'El pollo loco',
      description: 'simple OOP basiertes jump&run',
      src: '../../../../assets/img/project/elpolloloco.png',
      main: 'js',
    },
    {
      title: 'Join',
      description: 'Kanban-Board Gruppenarbeit',
      src: '../../../../assets/img/project/join.png',
      main: 'js',
    },
    {
      title: '...',
      description: '...',
      src: '',
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
