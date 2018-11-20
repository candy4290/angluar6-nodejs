import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ConfigService } from '../service/config.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private config: ConfigService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      console.log(req.url, req.withCredentials);
    if (req.method === 'POST') {
      const newReq = req.clone({
        url: this.config.getIpAndPort() + req.url,
        withCredentials: true
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
