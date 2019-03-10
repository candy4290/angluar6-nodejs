import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsComponent } from './editors.component';
import { EditorsRoutingModule } from './editors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EditorsRoutingModule
  ],
  declarations: [EditorsComponent]
})
export class EditorsModule { }
