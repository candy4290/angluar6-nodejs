import { Component, OnInit, TemplateRef } from '@angular/core';
import { listAnimm, rotateAnimm } from 'cxx-lib';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-photo-wall',
  templateUrl: './photo-wall.component.html',
  styleUrls: ['./photo-wall.component.scss'],
  animations: [listAnimm, rotateAnimm]
})
export class PhotoWallComponent implements OnInit {
  previewImage: string;
  imgs = [{frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}];
  frontOrBack = 'front';
  relativeFrontOrBack = 'back';
  private _modalService: NzModalRef;
  constructor(private modal: NzModalService) { }

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

  preview(tplContent: TemplateRef<{}>, img: any) {
    this.previewImage = img.url;
    this._modalService = this.modal.create({
      nzContent: tplContent,
      nzClosable: true,
      nzFooter: null,
      nzOnCancel: () => this._modalService.close
    });
  }

}
