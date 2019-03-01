import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortalDirective } from '@angular/cdk/portal';
import { OverlayPaneComponent } from './overlay-pane/overlay-pane.component';

@Component({
  selector: 'app-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss']
})
export class CdkComponent implements OnInit {
  globalOverlayPosition = 0;
  private _overlayTemplateRef: OverlayRef;
  @ViewChild('overlayGlobalTemplate') templateGlobalPortals: TemplatePortalDirective;
  constructor(public overlay: Overlay,
              public viewContainerRef: ViewContainerRef) {

              }

  ngOnInit() {
  }

  showOverlayGlobalPanelCenter() {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
      .global()
      // .centerHorizontally()
      // .centerVertically();
      .left(`${this.globalOverlayPosition}px`)
      .top(`${this.globalOverlayPosition}px`);
    this.globalOverlayPosition += 30;
    config.hasBackdrop = true;
    const overlayRef = this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
    overlayRef.attach(new ComponentPortal(OverlayPaneComponent, this.viewContainerRef));
  //   overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
  //     console.log(overlayRef._keydownEventSubscriptions + ' times');
  //     console.log(event);
  // });
  }

  showOverlayPanelTemplate() {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .top(`${this.globalOverlayPosition}px`);
    this.globalOverlayPosition += 30;
    this._overlayTemplateRef = this.overlay.create(config);
    this._overlayTemplateRef.attach(this.templateGlobalPortals);
  }

  dismissOverlayPanelTemplate() {
    if (this._overlayTemplateRef && this._overlayTemplateRef.hasAttached()) {
      this._overlayTemplateRef.dispose();
    }
  }

}
