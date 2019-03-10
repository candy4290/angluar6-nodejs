import { NgModule } from '@angular/core';
import { WangEditorComponent } from './wang-editor.component';
import { WangEditorRoutingModule } from './wang-editor-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { CxxEditorModule } from 'cxx-lib';

@NgModule({
  imports: [
    WangEditorRoutingModule,
    SharedModule,
    CxxEditorModule
  ],
  declarations: [WangEditorComponent]
})
export class WangEditorModule { }
