import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ea-colors',
  templateUrl: './ea-colors.component.html',
  styleUrls: ['./ea-colors.component.css']
})
export class EaColorsComponent implements OnInit {
  colors: number[] = [];
  pickers: string[] = [];

  constructor() { }

  hue: number = 10;
  saturation: number = 100;
  lightness: number = 50;
  backOne: string = `background-color: hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  backTwo: string = `background-color: hsl(${this.hue - 120}, ${this.saturation}%, ${this.lightness}%)`;
  backThree: string = `background-color: hsl(${this.hue - 240}, ${this.saturation}%, ${this.lightness}%)`;

  ngOnInit(): void {
    for (var i: number = 0; i < 144; i++) {
      if(i<36){
        this.colors.push(i);
        this.pickers.push(`background-color: hsl(${i}0,25%,50%)`);
      }
      else if(i<72){
        this.colors.push(i);
        this.pickers.push(`background-color: hsl(${i}0,50%,50%)`);
      }
      else if(i<108){
        this.colors.push(i);
        this.pickers.push(`background-color: hsl(${i}0,75%,50%)`);
      }
      else{
        this.colors.push(i);
        this.pickers.push(`background-color: hsl(${i}0,100%,50%)`);
      }
    }
  }

  updateColor(): void {
    this.backOne = `background-color: hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
    this.backTwo = `background-color: hsl(${this.hue - 120}, ${this.saturation}%, ${this.lightness}%)`;
    this.backThree = `background-color: hsl(${this.hue - 240}, ${this.saturation}%, ${this.lightness}%)`;
  }

  pickColor(event: Event): void {
    /*Récupération des valeurs rgb pour la conversion en hsl*/
    /*Désolé pour le any*/
    let elem: EventTarget | any = event.target;
    elem = elem.getAttribute('style').split('(');
    elem = elem[1].split(',')
    elem[2] = elem[2].replace(');', '')
    /*Conversion du rgb en hsl*/
    let hsl = this.rgbConverter(elem[0], elem[1], elem[2])
    this.hue = hsl[0];
    this.saturation = hsl[1];
    this.lightness = hsl[2];
    this.backOne = `background-color: hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
    this.backTwo = `background-color: hsl(${hsl[0] - 120}, ${hsl[1]}%, ${hsl[2]}%)`;
    this.backThree = `background-color: hsl(${hsl[0] - 240}, ${hsl[1]}%, ${hsl[2]}%)`;
  }
  rgbConverter(r: number, g: number, b: number) {
    r = r / 255,
      g = g / 255,
      b = b / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);

    let lum = (max + min) / 2;
    let hue = 0;
    let sat = 0;
    if (max == min) { // no saturation
      hue = 0;
      sat = 0;
    }
    else {
      var c = max - min;
      sat = c / (1 - Math.abs(2 * lum - 1));
      switch (max) {
        case r:
          hue = (g - b) / c;
          hue = ((g - b) / c) % 6;
          hue = (g - b) / c + (g < b ? 6 : 0);
          break;
        case g:
          hue = (b - r) / c + 2;
          break;
        case b:
          hue = (r - g) / c + 4;
          break;
      }
    }
    hue = Math.round(hue * 60); // °
    sat = Math.round(sat * 100); // %
    lum = Math.round(lum * 100); // %
    return [hue, sat, lum];
    }
  }
