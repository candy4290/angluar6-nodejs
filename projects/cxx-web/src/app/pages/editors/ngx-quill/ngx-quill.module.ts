import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQuillComponent } from './ngx-quill.component';
import { NgxQuillRoutingModule } from './ngx-quill-routing.module';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxQuillRoutingModule,
    QuillModule
  ],
  declarations: [NgxQuillComponent]
})
export class NgxQuillModule { }
