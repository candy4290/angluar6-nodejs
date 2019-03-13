import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { UEditorComponent } from 'ngx-ueditor';

@Component({
  selector: 'app-umeditor',
  templateUrl: './umeditor.component.html',
  styleUrls: ['./umeditor.component.scss']
})
export class UmeditorComponent {
  @ViewChild('full') full: UEditorComponent;

  setting = {
    // 这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
    toolbars: [['FullScreen', 'Source', '|', 'Undo', 'Redo', '|', 'Bold', 'Italic', 'underline', 'forecolor', '|', 'paragraph',
      'fontfamily', 'fontsize', '|',
      'Justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', 'simpleupload', '|',
      'link', 'unlink', 'myblockquote', 'insertorderedlist', 'insertunorderedlist',
      'preview'
    ]],
    // focus时自动清空初始化时的内容
    autoClearinitialContent: true,
    // 关闭字数统计
    wordCount: false,
    // 关闭elementPath
    elementPathEnabled: false,
    // 默认的编辑区域高度
    initialFrameHeight: 300,

    enableAutoSave: false,
    // autoSyncData: false,
    // 更多其他参数，请参考ueditor.config.js中的配置项
    serverUrl: 'http://localhost:8081/imgs/uploadImg'
  };

  _ready(event: any) {
  }

  onValueChange(value: string) {
    console.log('---编辑器内容发生改变---');
    console.log('编辑器内容：' + this.full.Instance.getContent());
  }

}
