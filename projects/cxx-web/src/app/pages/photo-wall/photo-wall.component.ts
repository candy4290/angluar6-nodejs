import { Component, OnInit } from '@angular/core';
import { listAnimm, rotateAnimm } from 'cxx-lib';

@Component({
  selector: 'app-photo-wall',
  templateUrl: './photo-wall.component.html',
  styleUrls: ['./photo-wall.component.scss'],
  animations: [listAnimm, rotateAnimm]
})
export class PhotoWallComponent implements OnInit {
  imgs = [{}];
  frontOrBack = 'front';
  relativeFrontOrBack = 'back';
  constructor() { }

  ngOnInit() {
  }

  /**
   *旋转
   *
   * @memberof PhotoWallComponent
   */
  rotate() {
    if (this.frontOrBack === 'front') {
      this.frontOrBack = 'back';
      this.relativeFrontOrBack = 'front';
    } else {
      this.frontOrBack = 'front';
      this.relativeFrontOrBack = 'back';
    }
  }

}
