import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.page.html',
  styleUrls: ['./photo-detail.page.scss'],
})
export class PhotoDetailPage implements OnInit {
  photo: Observable<any>;
  @Input() id;
  constructor(private route: ActivatedRoute, private photoService: PhotoService, private router: Router) { }
  ngOnInit() {
    // this.getPhotoDetail();
    console.log(+this.route.snapshot.params['id']);
    this.photoService.getDetail(+this.route.snapshot.params['id']).subscribe((photo) => {
      this.photo = photo
    })
  }
  getPhotoDetail() {
    this.photoService.getDetail(this.id).subscribe((rep) => {
      this.photo = rep
    })
  }
  retour() {
    this.router.navigate(['photo-liste'])
  }


}
