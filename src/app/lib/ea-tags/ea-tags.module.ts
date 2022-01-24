import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaTagsComponent } from './ea-tags.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



@NgModule({
  declarations: [
    EaTagsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [EaTagsComponent]
})
export class EaTagsModule { }
