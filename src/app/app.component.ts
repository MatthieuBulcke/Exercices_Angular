import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular_Exercices';
  rng:number=Math.floor(Math.random()*1000);

  @ViewChild('pageTitle')
  titleRef!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.titleRef.nativeElement.textContent);
  }
}
