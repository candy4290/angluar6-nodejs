import { NgModule } from '@angular/core';
import { PhotoWallComponent } from './photo-wall.component';
import { PhotoWallRoutingModule } from './photo-wall-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PhotoWallRoutingModule
  ],
  declarations: [PhotoWallComponent]
})
export class PhotoWallModule { }
