import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      if (req.method === 'POST') {
        return next.handle(req)
        .pipe(
          filter((event) => event instanceof HttpResponse),
          switchMap((event: any) => {
            event.body = event.body.rtnData;
            return of(event);
          })
        );
      } else {
        return next.handle(req);
      }
  }
}
