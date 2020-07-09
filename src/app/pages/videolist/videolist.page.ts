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
    private streamingMedia: StreamingMedia
  ) { }

  ngOnInit() {
  }

  playVideo() {
    alert("aaaa");
    const options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played'); },
      errorCallback: (e) => { console.log('Error streaming'); },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };
  
    // tslint:disable-next-line: max-line-length
    this.streamingMedia.playVideo("https://www.youtube.com/watch?v=xYrvjaSJH_M", options);
  }
}
