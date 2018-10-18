import { Component, OnInit, TemplateRef } from '@angular/core';
import { listAnimm, rotateAnimm } from 'cxx-lib';
import { NzModalService, NzModalRef, NzMessageService, UploadFile } from 'ng-zorro-antd';
import { PhotoWallService } from './photo-wall.service';

@Component({
  selector: 'app-photo-wall',
  templateUrl: './photo-wall.component.html',
  styleUrls: ['./photo-wall.component.scss'],
  animations: [listAnimm, rotateAnimm]
})
export class PhotoWallComponent implements OnInit {
  previewImage: string;
  imgs = [
    // {frontOrBack: 'front', relativeFrontOrBack: 'back', url: '/65J7vV2qRgTNrVDEsIL7lZdz.jpg'},
  // {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  // {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  // {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  // {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  // {frontOrBack: 'front', relativeFrontOrBack: 'back', url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}
];
  frontOrBack = 'front';
  relativeFrontOrBack = 'back';
  private _modalService: NzModalRef;
  constructor(private modal: NzModalService,
              private msg: NzMessageService,
              private phototWallService: PhotoWallService) { }

  ngOnInit() {
    this.phototWallService.getPhotoList().subscribe((res: any) => {
      res.forEach(item => {
        item.frontOrBack = 'front';
        item.relativeFrontOrBack = 'back';
        item.url = 'http://localhost:8081/' + item.path;
      });
      this.imgs = res;
    });
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

  beforeUploadBankcard = (file: File): boolean => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      this.msg.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msg.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      // this.loading = true;
      console.log('+++');
      return;
    }
    if (info.file.status === 'done') {
      console.log('---');
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (img: string) => {
        this.imgs.push({
          frontOrBack: 'front', relativeFrontOrBack: 'back', url: img
        });
        // this.loading = false;
        // this.avatarUrl = img;
      });
    }
  }

}
