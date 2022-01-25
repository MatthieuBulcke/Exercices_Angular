import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, fadeOut, slideLeftIn, slideRightOut } from './ea-core/ea-animation';

@Component({
  selector: 'ea-tags',
  animations:[
    fadeIn,
    fadeOut,
    slideLeftIn,
    slideRightOut,
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
