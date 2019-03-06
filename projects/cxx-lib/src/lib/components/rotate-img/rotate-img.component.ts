import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'lib-rotate-img',
  templateUrl: './rotate-img.component.html',
  styleUrls: ['./rotate-img.component.scss']
})
export class RotateImgComponent implements OnInit {

  @Input() src: string;
  @Input() modalService: NzModalRef;
  rotateDeg = 0;
  constructor() { }

  ngOnInit() {
  }

  rotate() {
    this.rotateDeg += 90;
    this.modalService.getElement().querySelector('.ant-modal-content')['style'].transform = `rotate(${this.rotateDeg}deg)`;
  }

}
