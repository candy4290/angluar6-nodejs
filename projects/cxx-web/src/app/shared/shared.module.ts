import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MagicSquareModule } from './components/magic-square/magic-square.module';
import { DirectiveModule } from 'cxx-lib';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    MagicSquareModule,
    DirectiveModule
  ]
})
export class SharedModule { }
