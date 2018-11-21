import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';
import * as NProgress from 'nprogress';
import { Router, NavigationStart, NavigationEnd, NavigationCancel,
  NavigationError, RoutesRecognized, ActivatedRoute } from '@angular/router';
import { tap, filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cxx-web';
  private ipAndPort$: Subscription;
  constructor(private app: AppService,
              private router: Router,
              private route: ActivatedRoute) {
    this.router.events.pipe(
      tap(event => {
        if (event instanceof NavigationStart) {
          // NProgress.configure({ parent: '#NProgress', showSpinner: false });
          NProgress.configure({ showSpinner: false });
          NProgress.start();
        } else if (event instanceof NavigationEnd) {
          NProgress.done();
        } else if (event instanceof NavigationCancel) {
          NProgress.done();
        } else if (event instanceof NavigationError) {
          NProgress.done();
        } else if (event instanceof RoutesRecognized) {
          // 路由已认证
          NProgress.done();
        }
      }),
      filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      // if (event['title']) {
      //   this.titleService.setTitle(event['title']);
      // } else {
      //   this.title.setTitle('惠利金科');
      // }
    });
  }
  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
