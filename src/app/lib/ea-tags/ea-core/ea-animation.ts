import { animate, state, style, transition, trigger } from '@angular/animations';
export let fadeIn = trigger('fadeIn',[
  state('void',style({opacity:0})),
  transition(':enter',animate('1s ease-in')),
]);
export let fadeOut = trigger('fadeOut',[
  state('void',style({opacity:0})),
  transition(':leave',animate('1s ease-out')),
]);
export let slideLeftIn = trigger('slideLeftIn',[
  state('void',style({transform:'translateX(-10px)'})),
  transition(':leave',animate('1s ease-out')),
]);
export let slideRightOut = trigger('slideRightOut',[
  state('void',style({transform:'translateX(10px)'})),
  transition(':leave',animate('1s ease-in')),
]);
