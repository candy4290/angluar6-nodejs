import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxQuillComponent } from './ngx-quill.component';

const routes: Routes = [{
  path: '', component: NgxQuillComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxQuillRoutingModule { }
