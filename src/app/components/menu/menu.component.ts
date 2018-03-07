import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  animate,
  transition,
  style
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ transform: 'translateY(10%)', opacity: 0 }),
        animate(600)
      ]),
      transition(':leave', [
        style({ transform: 'translateY(10%)', opacity: 0 }),
        animate(600)
      ])
    ]),
    trigger('heroState', [
      state(
        'inactive',
        style({
          transform: 'scale(1)'
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1.1)'
        })
      ),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class MenuComponent implements OnInit {
  state = 'inactive';
  paris = '../../../assets/paris.jpg';
  parisMap = '../../../assets/parisMap.jpg';
  athens = '../../../assets/athens.jpg';
  athensMap = '../../../assets/athensMap.jpg';
  london = '../../../assets/london.jpg';
  londonMap = '../../../assets/londonMap.jpg';
  amsterdam = '../../../assets/amsterdam.jpg';
  amsterdamMap = '../../../assets/amsterdamMap.jpg';
  usa = '../../../assets/newyork.jpg';
  usaMap = '../../../assets/newyorkMap.jpg';

  isHovered = [false, false, false, false, false];

  parisparams = {
    title: 'Paris',
    country: 'France'
  };
  constructor() {}

  ngOnInit() {}

  toggleHover(i) {
    console.log('hovering');
    this.isHovered[i] = true;
  }
  toggleHoverOff(i) {
    console.log('leaving');
    this.isHovered[i] = false;
  }
}
