import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MagicSquareModule } from './components/magic-square/magic-square.module';
export const Url = new InjectionToken('SettingsUrl');
@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    MagicSquareModule
  ]
})
export class SharedModule {
  static forRoot(url: string): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {provide: Url, useValue: url}
      ]
    };
  }
}
