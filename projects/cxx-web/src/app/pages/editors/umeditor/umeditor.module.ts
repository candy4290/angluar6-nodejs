import { NgModule } from '@angular/core';
import { UmeditorComponent } from './umeditor.component';
import { UmeditorRoutingModule } from './umeditor-routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    UmeditorRoutingModule
  ],
  declarations: [UmeditorComponent]
})
export class UmeditorModule { }
