import { Component, OnInit } from '@angular/core';
import { style, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-approach',
  templateUrl: './approach.component.html',
  styleUrls: ['./approach.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(600, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ApproachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
