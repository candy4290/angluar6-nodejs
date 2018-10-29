import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicSquareComponent } from './magic-square.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MagicSquareComponent
  ],
  declarations: [MagicSquareComponent]
})
export class MagicSquareModule { }
