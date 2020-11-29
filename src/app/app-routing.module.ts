import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'photo-liste',
    pathMatch: 'full'
  },
  {
    path: 'photo-liste',
    loadChildren: () => import('./photo-liste/photo-liste.module').then( m => m.PhotoListePageModule)
  },
  
   {
    path: 'photo-liste/photo-detail/:id',
    loadChildren: () => import('./photo-detail/photo-detail.module').then( m => m.PhotoDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
