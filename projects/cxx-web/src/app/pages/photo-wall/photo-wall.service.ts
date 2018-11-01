import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
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
    return this.http.post(`photo/list`, {}).pipe(map((rsp: any) => rsp.photoList));
  }

  /**
   *根据编号删除图片
   *
   * @param {*} id
   * @returns
   * @memberof PhotoWallService
   */
  deletePhotoById(id: any, path: any) {
    const req = {
      id: id,
      path: path
    };
    return this.http.post('photo/deleteById', req);
  }

  changeOrder(dragData: any, dropData: any) {
    const req = {
      dragData: dragData,
      dropData: dropData
    };
    return this.http.post('photo/changeOrder', req);
  }
}
