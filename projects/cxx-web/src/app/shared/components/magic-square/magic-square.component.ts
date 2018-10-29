import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-magic-square',
  templateUrl: './magic-square.component.html',
  styleUrls: ['./magic-square.component.scss']
})
export class MagicSquareComponent implements OnInit {
  divStyle: any;
  div1: any;
  div2: any;
  div3: any;
  div4: any;
  div5: any;
  div6: any;
  @Input()
  set width(value: number) {
    if (typeof value === 'undefined') {
      return;
    }
    this.setStyleMap(value);
  }
  @ViewChild('3d') box: any;
  private x = 30;
  private y = -60;
  constructor() { }

  ngOnInit() {
  }

  mousedown(ev: any) {
    const event = window.event || ev;
    const disY = event.clientX - this.y;
    const disX = event.clientY - this.x;
    document.onmousemove = function (ev2) {
      const event2 = window.event || ev2;
      // 计算偏移角度
      this.x = event2['clientY'] - disX;
      this.y = event2['clientX'] - disY;
      this.box.nativeElement.style.transform = 'perspective(800px) rotateY(' + this.y + 'deg) rotateX(' + this.x + 'deg)';
    }.bind(this);
    document.onmouseup = function () {
      document.onmousemove = null;
    };
  }

  setStyleMap(width = 200) {
    this.divStyle = {
      width: width + 'px',
      height: width + 'px',
      top: 200 + 'px',
      right: 200 + 'px'
    };
    this.div1 = {
      transform: `translateZ(${width / 2}px)`
    };
    this.div2 = {
      transform: `translateZ(-${width / 2}px)`
    };
    this.div3 = {
      transform: `translateX(-${width / 2}px) rotateY(90deg)`
    };
    this.div4 = {
      transform: `translateX(${width / 2}px) rotateY(90deg)`
    };
    this.div5 = {
      transform: `translateY(-${width / 2}px) rotateX(90deg)`
    };
    this.div6 = {
      transform: `translateY(${width / 2}px) rotateX(90deg)`
    };
  }

}
