import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { EaTagsModule } from './lib/ea-tags/ea-tags.module';
import { EaBlogComponent } from './components/ea-blog/ea-blog.component';
import { EaBlogFormComponent } from './components/ea-blog-form/ea-blog-form.component';
import { FormsModule } from '@angular/forms';
import { EaBlogArticlesComponent } from './components/ea-blog-articles/ea-blog-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarouselComponent,
    EaBlogComponent,
    EaBlogFormComponent,
    EaBlogArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EaTagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
