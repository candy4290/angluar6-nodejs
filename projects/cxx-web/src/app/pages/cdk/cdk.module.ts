import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkComponent } from './cdk.component';
import { CdkRoutingModule } from './cdk-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayPaneComponent } from './overlay-pane/overlay-pane.component';
import { PortalModule } from '@angular/cdk/portal';
@NgModule({
  imports: [
    CommonModule,
    CdkRoutingModule,
    OverlayModule,
    PortalModule
  ],
  declarations: [CdkComponent, OverlayPaneComponent],
  entryComponents: [OverlayPaneComponent]
})
export class CdkModule { }
