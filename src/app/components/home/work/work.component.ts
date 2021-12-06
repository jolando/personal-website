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

  @ViewChild('card', { static: true }) projectCard: ElementRef<HTMLDivElement>

  projects = [
    {
      title: 'el pollo loco',
      description: 'loremsdfsdfsd',
      src: '../../../assets/img/icons/pexels-miahil-tudor-3842444.jpg',
      main: 'angular',
    },
    {
      title: 'kochwelt',
      description: 'loremsdfsdfsd',
      src: '../../../assets/img/icons/pexels-miahil-tudor-3842444.jpg',
      main: 'angular',
    },
    {
      title: 'ring of fire',
      description: 'loremsdfsdfsd',
      src: 'sdfsdfd',
      main: 'angular',
    },
    {
      title: 'el pollo loco',
      description: 'loremsdfsdfsd',
      src: '../../../assets/img/icons/pexels-miahil-tudor-3842444.jpg',
      main: 'angular',
    },
    {
      title: 'kochwelt',
      description: 'loremsdfsdfsd',
      src: '../../../assets/img/icons/pexels-miahil-tudor-3842444.jpg',
      main: 'js',
    },
    {
      title: 'ring of fire',
      description: 'loremsdfsdfsd',
      src: '../../../assets/img/pexels-raka-miftah-4253484.jpg',
      main: 'js',
    },
  ];

  all: boolean = true;
  selected: boolean = false;

  clearedProjects = [];


  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
    this.clearedProjects = this.projects;
  }

  showAll() {
    this.clearedProjects = this.projects;
    console.log(this.clearedProjects);
  }
  showCategory(category: string) {
    this.clearedProjects = this.projects.filter(project => project.main === category);
    console.log(this.clearedProjects);
  }

  // showAll() {
  //   this.all = true;
  //   this.selected = false;
  // }

  // showCorrectProject(lan: string): void {

  //   if (this.projects) {
  //     this.clearedProjects = [];

  //     let found = this.projects.filter(p => p.main === lan)
  //     this.clearedProjects.push(found)
  //     console.log(found, this.clearedProjects)



  //   }
  //   this.all = false;
  //   this.selected = true;
  // }


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
      }
    });
  }
}
