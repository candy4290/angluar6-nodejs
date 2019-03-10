import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorsComponent } from './editors.component';

const routes: Routes = [
  { path: 'ckeditor', loadChildren: './ckeditor/ckeditor.module#CkeditorModule' },
  { path: 'froala', loadChildren: './froala-editor/froala-editor.module#FroalaEditorModule' },
  { path: 'wang-editor', loadChildren: './wang-editor/wang-editor.module#WangEditorModule' },
  { path: 'ngx-quill', loadChildren: './ngx-quill/ngx-quill.module#NgxQuillModule' },
  { path: 'umeditor', loadChildren: './umeditor/umeditor.module#UmeditorModule' },
  { path: '', component: EditorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorsRoutingModule { }
