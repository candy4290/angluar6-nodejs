import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cxx-web';
  private ipAndPort$: Subscription;
  constructor(private app: AppService) {}
  ngOnInit() {
    this.ipAndPort$ = this.app.ipAndPort().subscribe();
  }

  ngOnDestroy() {
    if (this.ipAndPort$) {
      this.ipAndPort$.unsubscribe();
    }
  }
}
