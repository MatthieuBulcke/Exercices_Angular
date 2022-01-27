import { Component, ContentChildren, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'ea-panel',
  templateUrl: './ea-panel.component.html',
  styleUrls: ['./ea-panel.component.css']
})
export class EaPanelComponent implements OnInit {
  @Input() selected!:boolean;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
  }
}
