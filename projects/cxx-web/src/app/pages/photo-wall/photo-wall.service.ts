import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppService } from '../../app.service';

@Injectable()
export class PhotoWallService {

  constructor(private http: HttpClient, private app: AppService) { }
  /**
   *图片列表查询
   *
   * @memberof PhotoWallService
   */
  getPhotoList() {
    return this.http.post(`photos`, {}).pipe(map((res: any) => res.rtnData.list));
  }
}
