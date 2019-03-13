import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
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
    language: 'zh-cn',
    filebrowserImageUploadUrl: 'http://localhost:8081/imgs-cdkeditor/uploadImg',
    // toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
    // plugins: [ 'Heading', 'Bold', 'Italic', 'Link', 'bulletedList', 'numberedList', 'BlockQuote', CKFinder ],
  };
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.Editor.create(document.querySelector('#editor'), {
      language: 'zh-cn',
      toolbar: [ 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'imageUpload', 'undo', 'redo',  ],
      // plugins: [ CKFinder, 'Bold', 'Italic', 'Typing', 'Enter' ],
      ckfinder: {
        uploadUrl: 'http://localhost:8081/imgs-cdkeditor/uploadImg',
        options: {
          resourceType: 'Images'
        }
      },
      image: {
        styles: ['full', 'alignLeft', 'alignCenter', 'alignRight'],
        toolbar:  ['imageStyle:full', 'imageStyle:alignLeft', 'imageStyle:alignCenter',
        'imageStyle:alignRight', '|', 'imageTextAlternative']
      }
    }).then((editor: any) => {
      this.Editor = editor;
      console.log(editor);
    }) .catch((error: any) => {
      // console.error(error);
    });
  }

  // public onReady( editor ) {
  //   editor.ui.getEditableElement().parentElement.insertBefore(
  //       editor.ui.view.toolbar.element,
  //       editor.ui.getEditableElement()
  //   );
  // }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    console.log( data );
  }
}
