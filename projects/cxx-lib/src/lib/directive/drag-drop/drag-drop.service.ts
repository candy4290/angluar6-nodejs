import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  dragData: any;
  dropData: any;
  constructor() { }

}
