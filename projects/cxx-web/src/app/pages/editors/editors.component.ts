import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit {
  editors = [{
    lable: 'ckeditor', url: 'ckeditor'
  }, {
    lable: 'froala', url: 'froala'
  }, {
    lable: 'wang', url: 'wang-editor'
  }, {
    lable: 'ngx-quill', url: 'ngx-quill'
  }, {
    lable: 'umeditor', url: 'umeditor'
  }];
  constructor() { }

  ngOnInit() {
  }

}
