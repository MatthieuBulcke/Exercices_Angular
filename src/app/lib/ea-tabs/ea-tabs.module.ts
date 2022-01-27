import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaTabsComponent } from 'src/app/components/ea-tabs/ea-tabs.component';
import { EaPanelComponent } from 'src/app/components/ea-panel/ea-panel.component';



@NgModule({
  declarations: [
    EaPanelComponent,
    EaTabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EaPanelComponent,
    EaTabsComponent
  ]
})
export class EaTabsModule { }
