import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'view-stories',  data: {stories : ''},
    loadChildren: () => import('./view-stories/view-stories.module').then( m => m.ViewStoriesPageModule)
  },
  {
    path: 'view-story',  data: {story : ''},
    loadChildren: () => import('./view-story/view-story.module').then( m => m.ViewStoryPageModule)
  },
  {
    path: 'all-stories', data: {story : ''},
    loadChildren: () => import('./all-stories/all-stories.module').then( m => m.AllStoriesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
