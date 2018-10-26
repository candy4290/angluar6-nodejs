import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreeDComponent } from './three-d.component';

const routes: Routes = [
  {path: '', component: ThreeDComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeDRoutingModule { }
