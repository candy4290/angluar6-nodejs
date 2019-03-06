import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotateImgComponent } from './rotate-img.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    RotateImgComponent
  ],
  declarations: [RotateImgComponent]
})
export class RotateImgModule { }
