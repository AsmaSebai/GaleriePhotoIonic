import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { PhotoListePageRoutingModule } from './photo-liste-routing.module';

import { PhotoListePage } from './photo-liste.page';
import { PhotoDetailPage } from '../photo-detail/photo-detail.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    PhotoListePageRoutingModule
  ],
  declarations: [PhotoListePage,PhotoDetailPage ]
})
export class PhotoListePageModule {}
