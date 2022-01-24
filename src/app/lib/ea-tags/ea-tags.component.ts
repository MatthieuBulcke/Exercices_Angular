import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ea-tags',
  animations:[
    trigger('fadeIn',[
      state('void',style({opacity:0})),
      transition(':enter',animate('1s ease-in')),
    ]),
    trigger('fadeOut',[
      state('void',style({opacity:0})),
      transition(':leave',animate('1s ease-out')),
    ]),
    trigger('slideLeftIn',[
      state('void',style({transform:'translateX(-10px)'})),
      transition(':leave',animate('1s ease-out')),
    ]),
    trigger('slideRightOut',[
      state('void',style({transform:'translateX(10px)'})),
      transition(':leave',animate('1s ease-in')),
    ])
  ],
  templateUrl: './ea-tags.component.html',
  styleUrls: ['./ea-tags.component.css']
})
export class EaTagsComponent implements OnInit {
  tags: string[] = ['1','2','3','4','5'];
  @Input() max: number = 5;

  constructor() { }

  ngOnInit(): void { }
  add(evt: Event): void {
    const el:HTMLInputElement = evt.target as HTMLInputElement;
    if(el.value && !this.tags.includes(el.value)){
      this.tags.push(el.value);
      el.value = '';
    }
  }
  delete(i: number): void {
    this.tags.splice(i, 1);
  }
}
