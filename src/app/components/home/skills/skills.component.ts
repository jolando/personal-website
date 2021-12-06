import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  cards = [
    {title: 'JavaScript', imgPath: '../../../../assets/img/icons/js.png'},
    {title: 'Angular', imgPath: '../../../../assets/img/icons/angular.png'},
    {title: 'HTML/CSS', imgPath: '../../../../assets/img/icons/css.png'},
    {title: 'Scrum', imgPath: '../../../../assets/img/icons/scrum-org-logo-circles.png'},
    {title: 'Git', imgPath: '../../../../assets/img/icons/git.png'},
    {title: 'Rest API', imgPath: '../../../../assets/img/icons/api.png'},
    {title: 'Test automation', imgPath: '../../../../assets/img/icons/test-lab.png'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
