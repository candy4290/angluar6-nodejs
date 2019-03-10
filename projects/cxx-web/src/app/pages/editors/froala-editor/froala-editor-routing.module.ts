import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FroalaEditorComponent } from './froala-editor.component';

const routes: Routes = [
  { path: '', component: FroalaEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FroalaEditorRoutingModule { }
