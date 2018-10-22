import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  defaultUrl: string;
  constructor(private http: HttpClient) {
  }

  ipAndPort() {
    return this.http.get('assets/config/app.json').pipe(tap((rsp: any) => {
      this.defaultUrl =  rsp.api.protocol + '//' + rsp.api.host + ':' + rsp.api.port + '/';
    }));
  }

}
