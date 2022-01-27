import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ea-card',
  templateUrl: './ea-card.component.html',
  styleUrls: ['./ea-card.component.css']
})
export class EaCardComponent implements OnInit {
  @Input() title:string = '';

  constructor() { }

  ngOnInit(): void { }

}
