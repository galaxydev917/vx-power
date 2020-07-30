import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform } from '@ionic/angular';
import { CategoriesObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  public strings = strings;
  videoMainCategories: CategoriesObject[] = [];
  isLoading = false;
  unreadNotificationCount = 0;
  height: any;
  constructor(
    public plt: Platform,
    private storage: Storage,
    private router: Router,
    private DataService: DataService
  ) { }

  async ionViewWillEnter() {
    this.storage.get('userinfo').then(userinfo=>{
     this.DataService.getUnreadCount(userinfo.email).subscribe( resp => {
       //if(resp)
       this.unreadNotificationCount = resp[0].unreadcount;
     });
    });
  }   

  ngOnInit() {
    this.isLoading = true;

    this.height = this.plt.height() / 4.4 + 'px';
    this.DataService.getDataCategories()
    .subscribe( resp => {
      this.videoMainCategories = resp;

      this.isLoading = false;

    } );
  }
  openNotifications(){
    if(this.unreadNotificationCount < 1)
      return;
    this.router.navigateByUrl('/notifications');
  }
}
