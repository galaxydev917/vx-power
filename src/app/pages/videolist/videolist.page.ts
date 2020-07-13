import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.page.html',
  styleUrls: ['./videolist.page.scss'],
})
export class VideolistPage implements OnInit {
  public strings = strings;

  constructor(
    private streamingMedia: StreamingMedia,
  ) { }

  ngOnInit() {
  }

  playVideo() {
    alert("bbbb");
    // this.youtube.openVideo('i1DiaXP9nCk');
  
    // tslint:disable-next-line: max-line-length
   // this.streamingMedia.playVideo("https://www.youtube.com/watch?v=xYrvjaSJH_M", options);
  }
}
