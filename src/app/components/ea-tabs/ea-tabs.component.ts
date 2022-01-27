import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'ea-tabs',
  templateUrl: './ea-tabs.component.html',
  styleUrls: ['./ea-tabs.component.css']
})
export class EaTabsComponent implements OnInit {
  @Input() selected!:boolean;
  tabsList!:QueryList<EaTabsComponent>;

  constructor() { }

  ngOnInit(): void { }
  onSelect(tab:EaTabsComponent):void{

  }
}
