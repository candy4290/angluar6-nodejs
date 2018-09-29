import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoWallComponent } from './photo-wall.component';

const routes: Routes = [
  {path: '', component: PhotoWallComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoWallRoutingModule { }
