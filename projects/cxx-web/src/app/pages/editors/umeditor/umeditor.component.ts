import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Ng2Ueditor } from 'ng2-ueditor';

@Component({
  selector: 'app-umeditor',
  templateUrl: './umeditor.component.html',
  styleUrls: ['./umeditor.component.scss']
})
export class UmeditorComponent {
  @ViewChild('ueditor') ueditor: Ng2Ueditor;

  content1: any;

  setting = {
    // 这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
    toolbars: [[
      'fullscreen', 'source', '|', 'undo', 'redo', '|',
      'bold', 'italic', 'underline', 'fontborder',
      'strikethrough', 'removeformat', 'formatmatch', 'autotypeset',
      'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
      // 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
      'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
      // 'directionalityltr', 'directionalityrtl', 'indent', '|',
      'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
      // 'touppercase', 'tolowercase', '|',
      // 'link', 'unlink', 'anchor', '|',
      // 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
      'simpleupload', 'insertimage',
      // 'emotion', 'scrawl',
      // 'insertvideo', 'music',
      // 'attachment',
      // 'map', 'gmap',
      // 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template',
      'background', '|',
      // 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
      'inserttable', 'deletetable', 'insertparagraphbeforetable',
      'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells',
      'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols',
      // 'charts',
      '|',
      // 'print',
      'preview',
      // 'searchreplace', 'drafts', 'help'
  ]],
    // focus时自动清空初始化时的内容
    autoClearinitialContent: true,
    // 关闭字数统计
    wordCount: false,
    // 关闭elementPath
    elementPathEnabled: false,
    // 默认的编辑区域高度
    initialFrameHeight: 300,

    // enableAutoSave: false,
    // autoSyncData: false,
    // 更多其他参数，请参考ueditor.config.js中的配置项
    serverUrl: '/server/ueditor/controller.php'
  };

  onValueChange(value: string) {
    console.log('---编辑器内容发生改变---');
    console.log('编辑器内容：' + value);
  }

  printInfo() {
    console.log('---打印信息---');
    console.log('编辑器内容：' + this.ueditor.getContent());
    console.log('纯文本内容，保留段落格式：' + this.ueditor.getPlainTxt());
    console.log('纯文本内容，没有段落格式：' + this.ueditor.getContentTxt());
    console.log('是否有内容：' + this.ueditor.hasContents());
  }

}
