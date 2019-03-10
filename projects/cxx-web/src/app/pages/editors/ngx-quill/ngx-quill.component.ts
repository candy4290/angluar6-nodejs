import { Component, OnInit } from '@angular/core';
// quill
@Component({
  selector: 'app-ngx-quill',
  templateUrl: './ngx-quill.component.html',
  styleUrls: ['./ngx-quill.component.scss']
})
export class NgxQuillComponent implements OnInit {
  textDetail: any;
  constructor() { }

  ngOnInit() {
  }

  EditorCreated(event: any) {
  }

}
