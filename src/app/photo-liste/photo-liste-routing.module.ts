import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PhotoListePage } from './photo-liste.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoListePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoListePageRoutingModule {}
