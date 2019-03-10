import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {
  protected config: any = {
    uiColor: '#F8F8F8',   // 编辑框背景色
    language: 'zh-cn',  // 显示语言
    toolbarCanCollapse: true,  // 是否可收缩功能栏
    toolbar: [['Maximize'],
    ['Undo', 'Redo', '-', 'Cut', ' Copy', 'Paste', 'PasteText',
      'PasteFromWord', '-', 'Link', 'Unlink', 'Anchor', '-', 'Image',
      'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', '-', 'Source'],
      ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript', '-', 'NumberedList',
      'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
    ['Styles', 'Format', 'Font', 'FontSize']]  // 工具部分
  };
  protected editContent = '';
  constructor() { }

  ngOnInit() {
  }

}
