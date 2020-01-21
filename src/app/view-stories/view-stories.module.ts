import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewStoriesPageRoutingModule } from './view-stories-routing.module';

import { ViewStoriesPage } from './view-stories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewStoriesPageRoutingModule
  ],
  declarations: [ViewStoriesPage]
})
export class ViewStoriesPageModule {}
