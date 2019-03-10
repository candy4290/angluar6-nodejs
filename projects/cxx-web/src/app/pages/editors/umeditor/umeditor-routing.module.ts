import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UmeditorComponent } from './umeditor.component';

const routes: Routes = [{
  path: '', component: UmeditorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmeditorRoutingModule { }
