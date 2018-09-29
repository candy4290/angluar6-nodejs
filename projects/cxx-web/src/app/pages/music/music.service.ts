import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class MusicService {

  constructor(private http: HttpClient) { }

  /**
   *查询音乐列表
   *
   * @memberof MusicService
   */
  queryMusicList() {
    return this.http.post('http://localhost:8081/musicList', {}).pipe(
      map(rsp => {
        return rsp['rtnData'].musicList;
      }));
  }
}
