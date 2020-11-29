import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(public http: HttpClient) { }
  getPhoto(size:number,page:number): Observable<any>{
    // return this.http.get('https://picsum.photos/v2/list');
    return this.http.get('https://picsum.photos/v2/list?page='+page+'&limit='+size);
  }

  getDetail(id: number): Observable<any>{
    return this.http.get('https://picsum.photos/id/' + id + '/info');
  }
}
