import { NgModule } from '@angular/core';
import { ThreeDComponent } from './three-d.component';
import { ThreeDRoutingModule } from './three-d-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ThreeDRoutingModule,
  ],
  declarations: [ThreeDComponent]
})
export class ThreeDModule { }
