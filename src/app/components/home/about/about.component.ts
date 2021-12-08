import { Component, OnInit } from '@angular/core';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
// import { faXing } from '@fortawesome/free-brands-svg-icons';
// import { faWalking} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faTelegramPlane = faTelegramPlane;

  constructor() { }

  ngOnInit(): void {
  }

}
