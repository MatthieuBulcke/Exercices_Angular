import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slide-show-img',
  templateUrl: './slide-show-img.component.html',
  styleUrls: ['./slide-show-img.component.css']
})
export class SlideShowImgComponent implements OnInit {
  rng: number = Math.floor(Math.random() * 10 + 1000);

  constructor() { }

  ngOnInit(): void {
  }

}
