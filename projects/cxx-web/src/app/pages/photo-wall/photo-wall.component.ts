import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { listAnimm, rotateAnimm } from 'cxx-lib';
import { NzModalService, NzModalRef, NzMessageService, UploadFile } from 'ng-zorro-antd';
import { PhotoWallService } from './photo-wall.service';
import { AppService } from '../../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-wall',
  templateUrl: './photo-wall.component.html',
  styleUrls: ['./photo-wall.component.scss'],
  animations: [listAnimm, rotateAnimm]
})
export class PhotoWallComponent implements OnInit, OnDestroy {
  previewImage: string;
  imgs = [
  ];
  frontOrBack = 'front';
  relativeFrontOrBack = 'back';
  private _modalService: NzModalRef;
  private getPhotoList$: Subscription;
  private deletePhotoById$: Subscription;
  private changeOrder$: Subscription;
  constructor(private modal: NzModalService,
    private msg: NzMessageService,
    private phototWallService: PhotoWallService,
    private appService: AppService) { }

  ngOnInit() {
    this.phototWallService.getPhotoList().subscribe((res: any) => {
      res.forEach(item => {
        item.frontOrBack = 'front';
        item.relativeFrontOrBack = 'back';
        item.url = this.appService.defaultUrl + item.path;
      });
      this.imgs = res;
    });
  }

  ngOnDestroy() {
    if (this.getPhotoList$) {
      this.getPhotoList$.unsubscribe();
    }
    if (this.deletePhotoById$) {
      this.deletePhotoById$.unsubscribe();
    }
    if (this.changeOrder$) {
      this.changeOrder$.unsubscribe();
    }
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
      nzWidth: document.body.clientWidth - 48,
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

  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      this.imgs.push({
        frontOrBack: 'front',
        relativeFrontOrBack: 'back',
        url: this.appService.defaultUrl + info.file.response.path,
        path: info.file.response.path,
        id: info.file.response.id,
        name: info.file.response.name
      });
    }
  }

  delete(img: any) {
    this.deletePhotoById$ = this.phototWallService.deletePhotoById(img.id, img.path).subscribe(rsp => {
      this.imgs = [].concat(this.imgs.filter(item => item.id !== img.id));
    }, error => {
      this.msg.error('删除失败！');
    });
  }

  changeOrder(event: any) {
    const dragData = event.dragData;
    const dropData = event.dropData;
    this.changeOrder$ = this.phototWallService.changeOrder(dragData, dropData).subscribe(rsp => {
      this.ngOnInit();
    });
  }

}
