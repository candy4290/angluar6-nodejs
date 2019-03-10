import { NgModule } from '@angular/core';
import { UmeditorComponent } from './umeditor.component';
import { UmeditorRoutingModule } from './umeditor-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { Ng2UeditorModule } from 'ng2-ueditor';
@NgModule({
  imports: [
    SharedModule,
    UmeditorRoutingModule,
    Ng2UeditorModule
  ],
  declarations: [UmeditorComponent]
})
export class UmeditorModule { }
