import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorComponent } from './ckeditor.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { CkeditorRoutingModule } from './ckeditor-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CkeditorRoutingModule,
    CKEditorModule
  ],
  declarations: [CkeditorComponent]
})
export class CkeditorModule { }
