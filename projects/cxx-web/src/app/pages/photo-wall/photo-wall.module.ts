import { NgModule } from '@angular/core';
import { PhotoWallComponent } from './photo-wall.component';
import { PhotoWallRoutingModule } from './photo-wall-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PhotoWallService } from './photo-wall.service';

@NgModule({
  imports: [
    SharedModule,
    PhotoWallRoutingModule
  ],
  declarations: [PhotoWallComponent],
  providers: [PhotoWallService]
})
export class PhotoWallModule { }
