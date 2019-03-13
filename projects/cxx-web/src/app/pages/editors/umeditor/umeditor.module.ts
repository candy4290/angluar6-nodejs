import { NgModule } from '@angular/core';
import { UmeditorComponent } from './umeditor.component';
import { UmeditorRoutingModule } from './umeditor-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { UEditorModule } from 'ngx-ueditor';
@NgModule({
  imports: [
    SharedModule,
    UmeditorRoutingModule,
    UEditorModule.forRoot({
      js: [
        `./assets/ueditor/ueditor.all.min.js`,
        `./assets/ueditor/ueditor.config.js`,
      ],
      // 默认前端配置项
      options: {
        UEDITOR_HOME_URL: './assets/ueditor/'
      }
    })
  ],
  declarations: [UmeditorComponent]
})
export class UmeditorModule { }
