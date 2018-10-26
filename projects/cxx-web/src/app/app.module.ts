import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RequestInterceptor, ResponseInterceptor, ConfigService } from 'cxx-lib';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
export function createRootInitializer(http: HttpClient, config: ConfigService) {
  return () => {
    return http.get('assets/config/app.json').toPromise().then((rsp: any) => {
      config.config = rsp;
    });
  };
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutes,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
    {provide: APP_INITIALIZER, useFactory: (createRootInitializer), deps: [HttpClient, ConfigService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
