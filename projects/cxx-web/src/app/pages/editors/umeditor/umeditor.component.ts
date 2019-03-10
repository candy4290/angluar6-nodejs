import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-umeditor',
  templateUrl: './umeditor.component.html',
  styleUrls: ['./umeditor.component.scss']
})
export class UmeditorComponent implements OnInit, OnDestroy, AfterViewInit {
  full_source: any;
  config = {
    toolbar: ['undo redo | bold italic underline'],
    initialFrameHeight: 100
  };
  constructor(private sanitizer: DomSanitizer) {
  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

}
