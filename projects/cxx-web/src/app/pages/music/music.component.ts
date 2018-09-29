import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { UploadFile, NzMessageService } from 'ng-zorro-antd';
import { Util, item } from 'cxx-lib';
import { Music } from './music.model';
import { Subscription } from 'rxjs';
import { MusicService } from './music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  animations: [item]
})
export class MusicComponent implements OnInit, OnDestroy, AfterViewInit {
  music: Music = {
    musicId: 0,
    musicName: '',
    musicer: '',
    musicSrc: ''
  };
  musicList: Music[] = [];
  avatarUrl = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
  paused = true; // 是否暂停（默认为true）
  @ViewChild('cxxmusic') cxxmusic: ElementRef;
  private audio: any;
  private pauseInterval: any;
  private musicList$: Subscription;
  constructor(private message: NzMessageService,
    private musicService: MusicService) {
    this.musicList$ = this.musicService.queryMusicList().subscribe(rsp => {
      this.musicList = rsp;
      this.music = this.musicList[0];
    }, error => {
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.musicList$) {
      this.musicList$.unsubscribe();
    }
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
    if (this.pauseInterval) {
      clearInterval(this.pauseInterval);
    }
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
    if (this.pauseInterval) {
      clearInterval(this.pauseInterval);
    }
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
