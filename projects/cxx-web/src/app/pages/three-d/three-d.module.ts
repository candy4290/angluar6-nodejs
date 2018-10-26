import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDComponent } from './three-d.component';
import { ThreeDRoutingModule } from './three-d-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThreeDRoutingModule
  ],
  declarations: [ThreeDComponent]
})
export class ThreeDModule { }
