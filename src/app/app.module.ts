import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { EaTagsModule } from './lib/ea-tags/ea-tags.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EaTagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
