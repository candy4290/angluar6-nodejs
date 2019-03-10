import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FroalaEditorComponent } from './froala-editor.component';
import { FroalaEditorRoutingModule } from './froala-editor-routing.module';
import { FroalaEditorModule as FroalaEditorModuleO, FroalaViewModule } from 'angular2-froala-wysiwyg';
@NgModule({
  imports: [
    CommonModule,
    FroalaEditorRoutingModule,
    FroalaEditorModuleO.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [FroalaEditorComponent]
})
export class FroalaEditorModule { }
