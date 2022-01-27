import { Component, Input, OnInit, Query, QueryList, ViewChildren } from '@angular/core';
import { EaCarouselImgModule } from 'src/app/lib/ea-carousel-img/ea-carousel-img.module';

@Component({
  selector: 'ea-slide-show',
  templateUrl: './ea-slide-show.component.html',
  styleUrls: ['./ea-slide-show.component.css']
})
export class EaSlideShowComponent implements OnInit {
  rng: number = Math.floor(Math.random() * 1000+100);

  images: EaCarouselImgModule[] = [
    {title:'Minou 1',desc:'Ceci est un petit chat',imgUrl:`http://placekitten.com/${this.rng}`},
    {title:'Minou 2',desc:'Ceci est un autre petit chat',imgUrl:`http://placekitten.com/${this.rng+1}`},
    {title:'Minou 3',desc:'Ceci est un petit chat sûrement différent du premier petit chat',imgUrl:`http://placekitten.com/${this.rng+2}`},
    {title:'Minou 4',desc:'C\'est aussi un chat',imgUrl:`http://placekitten.com/${this.rng+3}`},
    {title:'Minou 5',desc:'Encore un chat',imgUrl:`http://placekitten.com/${this.rng+4}`},
    {title:'Minou 6',desc:'Toujours un chat',imgUrl:`http://placekitten.com/${this.rng+5}`},
  ];
  slide: number = 0;
  @ViewChildren('img')
  imgList!: QueryList<HTMLImageElement>;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    console.log(this.imgList);
  }
  nextSlide() {
    if(this.slide < this.images.length-1){
      this.slide++;
    }
    else{
      this.slide = 0;
    }
  }
  previousSlide() {
    if (this.slide > 0) {
      this.slide--;
    }
    else{
      this.slide = this.images.length-1;
    }
  }
}
