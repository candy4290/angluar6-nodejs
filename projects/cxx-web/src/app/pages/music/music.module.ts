import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import { SharedModule } from '../../shared/shared.module';
import { MusicRoutingModule } from './music-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MusicRoutingModule
  ],
  declarations: [MusicComponent]
})
export class MusicModule { }
