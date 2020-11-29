import { inject, TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('PhotoService', () => {
  let photoService: PhotoService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PhotoService
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    photoService = new PhotoService(httpClient);
    httpClient = TestBed.inject(HttpClient)
  });

  it('exists', inject([PhotoService], (service: PhotoService) => {
    expect(PhotoService).toBeTruthy();
  }));

  describe('photos', () => {
    it('gets photos to url', () => {
      let photo
      photoService.getPhoto(20, 2).subscribe(data => {
        photo = data;
        expect(photo.author).toBe('Alejandro Escamilla');

      });

      const req = httpTestingController.expectOne(
        'https://picsum.photos/v2/list?page=2&limit=20'
      );
      expect(req.request.method).toEqual('GET');
      req.flush({
        author: 'Alejandro Escamilla'
      });
      httpTestingController.verify();
    });
  });

});
