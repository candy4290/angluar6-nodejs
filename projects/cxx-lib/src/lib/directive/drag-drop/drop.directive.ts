import { Directive, HostListener, ElementRef, Output, EventEmitter, Input, Renderer2 } from '@angular/core';
import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[libDrop][dropData][dragEnterClass]'
})
export class DropDirective {
  @Input()
  dragEnterClass: string;
  @Input() dropData: any;
  @Output() dropped = new EventEmitter<any>();
  constructor(private el: ElementRef,
              private rd: Renderer2,
              private service: DragDropService) { }
  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    this.service.dropData = this.dropData;
    ev.preventDefault();
    ev.stopPropagation();
    // if (this.el.nativeElement === ev.target) {
    //   console.log('+++');
    //   // this.data$.subscribe(dragData => {
    //   //   if (this.dropTags.indexOf(dragData.tag) > -1) {
    //       this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    //   //   }
    //   // });
    // }
    if (this.service.dragData !== this.dropData) {
      console.log('+++');
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      // this.data$.subscribe(dragData => {
      //   if (this.dropTags.indexOf(dragData.tag) > -1) {
      //     this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
      //     this.rd.setProperty(ev, 'dataTransfer.effectEffect', 'move');
      //   } else {
      //     this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
      //     this.rd.setProperty(ev, 'dataTransfer.effectEffect', 'none');

      //   }
      // });
    }
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    // if (this.el.nativeElement === ev.target) {
    //   this.data$.subscribe(dragData => {
    //     if (this.dropTags.indexOf(dragData.tag) > -1) {
    //     }
    //   });
    // }
  }
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    // if (this.el.nativeElement === ev.target) {
    //   this.data$.subscribe(dragData => {
    //     if (this.dropTags.indexOf(dragData.tag) > -1) {
    //       this.dropped.emit(dragData);
    //       this.service.clearDragData();
    //     }
    //   });
    // }
  }

}
