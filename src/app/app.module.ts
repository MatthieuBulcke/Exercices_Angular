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
import { EaCardComponent } from './components/ea-card/ea-card.component';
import { EaPanelComponent } from './components/ea-panel/ea-panel.component';
import { EaTabsComponent } from './components/ea-tabs/ea-tabs.component';
import { EaSlideShowComponent } from './components/ea-slide-show/ea-slide-show.component';
import { SlideShowImgComponent } from './components/ea-slide-show/slide-show-img/slide-show-img.component';
import { EaColorsComponent } from './components/ea-colors/ea-colors.component';
import { EaCryptoComponent } from './components/ea-crypto/ea-crypto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarouselComponent,
    EaBlogComponent,
    EaBlogFormComponent,
    EaBlogArticlesComponent,
    EaCardComponent,
    EaPanelComponent,
    EaTabsComponent,
    EaSlideShowComponent,
    SlideShowImgComponent,
    EaColorsComponent,
    EaCryptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EaTagsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
