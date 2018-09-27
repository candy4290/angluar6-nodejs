import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UploadFile, NzMessageService } from 'ng-zorro-antd';
import { Util, item } from 'cxx-lib';
import { Music } from './music.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  animations: [item]
})
export class MusicComponent implements OnInit, AfterViewInit {
  music: Music;
  musicList: Music[] = [];
  avatarUrl = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
  paused = true; // 是否暂停（默认为true）
  @ViewChild('cxxmusic') cxxmusic: ElementRef;
  private audio: any;
  private pauseInterval: any;
  constructor(private message: NzMessageService) { }

  ngOnInit() {
    this.musicList = [
      {musicId: 0, musicSrc: '../../../assets/mp3/赵雷 - 南方姑娘.mp3', musicName: '南方姑娘', musicer: '赵雷'},
      {musicId: 1, musicSrc: '../../../assets/mp3/冯提莫 - 佛系少女.mp3', musicName: '佛系少女', musicer: '冯提莫'},
    ];
    this.music = this.musicList[0];
  }

  ngAfterViewInit() {
    this.audio = this.cxxmusic.nativeElement;
  }

  playOrPause() {
    this.paused = !this.paused;
    if (!this.paused) {
      this.play(this.audio);
    } else {
      this.pause(this.audio);
    }
  }

  /**
   *播放
   *
   * @param {*} audio
   * @memberof MusicComponent
   */
  play(audio: any) {
    if (this.pauseInterval) {
      clearInterval(this.pauseInterval);
    }
    audio.volume = 1;
    audio.play();
  }

  /**
   *暂停
   *
   * @param {*} audio
   * @memberof MusicComponent
   */
  pause(audio: any) {
    let v = audio.volume;
    this.pauseInterval = setInterval(() => {
      v -= 0.2;
      if (v > 0) {
        audio.volume = v;
      } else {
        clearInterval(this.pauseInterval);
        audio.pause();
      }
    }, 200);
  }

  /**
   *上一首（无上一首就最后一首）
   *
   * @memberof MusicComponent
   */
  playPreSong() {
    const currentOrder = this.musicList.indexOf(this.music);
    if (currentOrder > 0) {
      this.music = this.musicList[currentOrder - 1];
      this.audio.src = this.music.musicSrc;
      if (!this.paused) {
        this.audio.play();
      }
    } else {
      this.music = this.musicList[this.musicList.length - 1];
      this.audio.src = this.music.musicSrc;
      if (!this.paused) {
        this.audio.play();
      }
    }
  }

  /**
   *下一首（无下一首就最后一首）
   *
   * @memberof MusicComponent
   */
  playNextSong() {
    const currentOrder = this.musicList.indexOf(this.music);
    if (currentOrder < this.musicList.length - 1) {
      this.music = this.musicList[currentOrder + 1];
      this.audio.src = this.music.musicSrc;
      if (!this.paused) {
        this.audio.play();
      }
    } else {
      this.music = this.musicList[0];
      this.audio.pause();
      this.audio.src = this.music.musicSrc;
      if (!this.paused) {
        this.audio.play();
      }
    }
  }

  beforeUpload = (file: File): boolean => {
    if (!Util.fileCheck(this.message, file)) {
      return false;
    }
    const uploadFile: UploadFile = Object.assign(file);
    Util.getBase64(file, (img: string) => {
      uploadFile.thumbUrl = img;
      this.avatarUrl = img;
    });
    return false;
  }

  ended() {
    console.log('----+++++');
  }

}
