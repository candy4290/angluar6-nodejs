import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-froala-editor',
  templateUrl: './froala-editor.component.html',
  styleUrls: ['./froala-editor.component.scss']
})
export class FroalaEditorComponent implements OnInit {
  froalaText: any;
  froalaText1: any;
  froalaTextYL: any;
  // 需要font-awesome jquery
  option = {
  };
  @ViewChild('content') content: any;
  constructor(private modal: NzModalService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.option = {
      language: 'zh_cn', // 配置语言
      placeholderText: '请输入内容', // 文本框提示内容
      charCounterCount: true, // 是否开启统计字数
      // charCounterMax: 200, // 最大输入字数,目前只支持英文字母
      // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
      toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough',
      'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
      codeMirror: false, // 高亮显示html代码
      codeMirrorOptions: { // 配置html代码参数
        tabSize: 4
      },
      // 上传图片，视频等稳健配置
      imageUploadURL: 'http://localhost:8081/imgs/uploadImg', // GLOBAL.INCONFIG.getIP()+接口名称,
            // imageUploadURL:'http://11.177.50.63:9999/emanager/sns/uploadPhoto',//本地路径
      // imageUploadParams: { uid: this.questionListService.userInfo.id},//接口其他传参,默认为空对象{},
      imageUploadMethod: 'POST', // POST/GET,
      // 事件, 每次输入,就将值传递给父组件, 或者使用失去焦点的时候传递。
      // events: {
      //   'froalaEditor.keyup': function (e, editor) {
      //     that.froala.emit(that.froalaText);
      //     console.log(editor.selection.get());
      //   }
      // }
  };
}

  dd() {
    console.log(this.froalaText);
    this.froalaTextYL = this.sanitizer.bypassSecurityTrustHtml(this.froalaText);
    this.modal.create({
      nzWidth: 800,
      nzContent: this.content
    });
  }

}
