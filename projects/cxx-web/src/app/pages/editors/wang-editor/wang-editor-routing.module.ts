import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WangEditorComponent } from './wang-editor.component';

const routes: Routes = [{
  path: '', component: WangEditorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WangEditorRoutingModule { }
