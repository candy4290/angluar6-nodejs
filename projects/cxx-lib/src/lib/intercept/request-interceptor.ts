import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {
    console.log('interceptor');
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (req.method === 'POST') {
      const newReq = req.clone({
        url: 'http://localhost:8081/' + req.url
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
