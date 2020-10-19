import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoListObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.page.html',
  styleUrls: ['./videolist.page.scss'],
})
export class VideolistPage implements OnInit {
  public strings = strings;
  title: string;
  isLoading = false;
  id: any;
  height: any;
  videolist: VideoListObject[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    public plt: Platform,
    private youtube: YoutubeVideoPlayer
  ) { }

  ngOnInit() {
    this.height = (this.plt.height() - 44) * 1 / 3 + 'px';
  }

  async ionViewWillEnter() {
    this.isLoading = true;
    this.route.params.subscribe(
      data => {
        this.id = data.id;
        this.title = data.title;
        this.getVideoList();

        if (!this.id) {
          this.goBack();
        }
      }
    );
  }
  
  goBack() {
    this.router.navigate(['/home']);
  }

  getVideoList() {
    this.dataService.getVideoList(this.id)
    .subscribe( resp => {
      this.videolist = resp;
      this.isLoading = false;
    });
  }
  playVideo(video) {
    this.youtube.openVideo(video.video_urlid);
  }
}
