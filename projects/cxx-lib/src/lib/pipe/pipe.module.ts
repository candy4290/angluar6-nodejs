import { NgModule } from '@angular/core';
import { DesensitizationPipe } from './desensitization.pipe';

const pipe = [
  DesensitizationPipe
];

@NgModule({
  exports: [
    ...pipe
  ],
  declarations: [
    ...pipe
  ],
  providers: [
    ...pipe
  ]
})
export class PipeModule { }
