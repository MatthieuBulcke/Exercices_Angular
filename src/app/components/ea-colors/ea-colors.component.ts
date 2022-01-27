import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ea-colors',
  templateUrl: './ea-colors.component.html',
  styleUrls: ['./ea-colors.component.css']
})
export class EaColorsComponent implements OnInit {

  constructor() { }
  hue:number = 10;
  saturation:number = 100;
  lightness:number = 50;
  backOne:string = `background-color: hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  backTwo:string = `background-color: hsl(${this.hue-120}, ${this.saturation}%, ${this.lightness}%)`;
  backThree:string = `background-color: hsl(${this.hue-240}, ${this.saturation}%, ${this.lightness}%)`;

  ngOnInit(): void {

  }
  updateColor():void {
    this.backOne = `background-color: hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
    this.backTwo = `background-color: hsl(${this.hue-120}, ${this.saturation}%, ${this.lightness}%)`;
    this.backThree = `background-color: hsl(${this.hue-240}, ${this.saturation}%, ${this.lightness}%)`;
  }
}
