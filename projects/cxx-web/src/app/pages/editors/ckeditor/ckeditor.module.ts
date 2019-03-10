import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorComponent } from './ckeditor.component';
import { CkeditorRoutingModule } from './ckeditor-routing.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
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
