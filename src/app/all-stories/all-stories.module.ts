import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllStoriesPageRoutingModule } from './all-stories-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AllStoriesPage } from './all-stories.page';
const routes: Routes = [
  {
    path: '',
    component: AllStoriesPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllStoriesPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllStoriesPage]
})
export class AllStoriesPageModule {}
