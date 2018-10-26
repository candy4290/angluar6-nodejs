import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss']
})
export class ThreeDComponent implements OnInit {
  @ViewChild('3d') box: any;
  private x = 30;
  private y = -60;
  constructor() { }

  ngOnInit() {
  }

  mousedown(ev: any) {
    console.log('mousedown');
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
      console.log('clear');
      document.onmousemove = null;
    };
  }

}
