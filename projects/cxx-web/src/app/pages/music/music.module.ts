import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import { SharedModule } from '../../shared/shared.module';
import { MusicRoutingModule } from './music-routing.module';
import { MusicService } from './music.service';

@NgModule({
  imports: [
    SharedModule,
    MusicRoutingModule
  ],
  declarations: [MusicComponent],
  providers: [MusicService]
})
export class MusicModule { }
