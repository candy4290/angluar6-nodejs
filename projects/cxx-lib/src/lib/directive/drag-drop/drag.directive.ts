import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[libDrag][dragData][draggedClass]'
})
export class DragDirective {

  private _isDraggable = false;
  @Input() dragData: any;
  @Input('appDraggable')
  set Draggable(val: boolean) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get Draggable() {
    return this._isDraggable;
  }
  @Input() draggedClass: string;
  @Input() dragTag: string;
  constructor(private el: ElementRef,
              private rd: Renderer2,
              private service: DragDropService
              ) { }
  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    this.service.dragData = this.dragData;
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      // this.service.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }

}
