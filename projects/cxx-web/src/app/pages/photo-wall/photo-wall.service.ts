import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotoWallService {

  constructor(private http: HttpClient) { }
  /**
   *图片列表查询
   *
   * @memberof PhotoWallService
   */
  getPhotoList() {
    return this.http.post('http://localhost:8081/photos', {}).pipe(map((res: any) => res.rtnData.list));
  }
}
