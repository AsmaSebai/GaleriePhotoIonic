import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { IonInfiniteScroll } from '@ionic/angular';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-liste',
  templateUrl: './photo-liste.page.html',
  styleUrls: ['./photo-liste.page.scss'],
})
export class PhotoListePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  photo: Observable<any>;
  id: number;
  show = true;
  tab: Array<any> = [];
  idSearch: Array<any> = [];
  currentPage: number = 1;
  size: number = 20;
  totalPages: number = 3;

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
    this.getPhotos();
  }

  doInfinite(infiniteScroll) {
    this.getPhotos(infiniteScroll);
    this.currentPage++;
    if (this.currentPage === this.totalPages) {
      infiniteScroll.target.complete();
    }
  }

  getPhotos(infiniteScroll?) {
    this.photoService.getPhoto(this.size, this.currentPage).subscribe(data => {
      console.log(data);
      this.photo = data;
      if (infiniteScroll) {
        infiniteScroll.target.complete();
      }
    });
  }

  detailPhoto(id) {
    this.router.navigate(['photo-liste/photo-detail/' + id])
    this.show = true
    this.id = id;
  }

  onSearchImages(ev: any, infiniteScroll) {
    const val = ev.target.value;
    console.log(val)
    this.photoService.getPhoto(this.size, this.currentPage).subscribe(data => {
      if (val && val.trim() !== '') {
        this.show = false;
        this.photoService.getPhoto(this.size, this.currentPage).pipe(
          map(
            (articles) => articles.filter(
              (article) => {
                return (article.author.toLowerCase().indexOf(val.toLowerCase()) > -1);
              }
            )
          )
        ).subscribe(
          (articles) => {
            this.photo = articles;
            console.log(this.photo)
          }
        );
             }
      else {
        this.show = true;
        this.getPhotos()
      }
    })
  }
}
