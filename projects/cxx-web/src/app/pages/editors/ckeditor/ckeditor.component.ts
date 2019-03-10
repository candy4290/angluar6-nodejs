import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit, AfterViewInit {
  public Editor = ClassicEditor;
  // public Editor = DecoupledEditor;
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  public config = {
    // language: 'zh-cn'
  };
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // ClassicEditor.create(document.querySelector('#editor'), {
    //   plugins: [ EasyImage ],
    // }).then(rsp => {console.log('----'); });
  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    console.log( data );
  }
}
