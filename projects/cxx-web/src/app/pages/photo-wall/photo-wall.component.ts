import { Component, OnInit } from '@angular/core';
import { listAnimm, rotateAnimm } from 'cxx-lib';

@Component({
  selector: 'app-photo-wall',
  templateUrl: './photo-wall.component.html',
  styleUrls: ['./photo-wall.component.scss'],
  animations: [listAnimm, rotateAnimm]
})
export class PhotoWallComponent implements OnInit {
  imgs = [{frontOrBack: 'front', relativeFrontOrBack: 'back'}, {frontOrBack: 'front', relativeFrontOrBack: 'back'}];
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
  rotate(img: any) {
    if (img.frontOrBack === 'front') {
      img.frontOrBack = 'back';
      img.relativeFrontOrBack = 'front';
    } else {
      img.frontOrBack = 'front';
      img.relativeFrontOrBack = 'back';
    }
  }

}
