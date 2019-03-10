import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CxxEditorComponent } from './cxxEditor.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports: [CxxEditorComponent],
  declarations: [CxxEditorComponent]
})
export class CxxEditorModule { }
