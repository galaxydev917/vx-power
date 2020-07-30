import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { QuotesObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.page.html',
  styleUrls: ['./motivation.page.scss'],
})
export class MotivationPage implements OnInit {

  public strings = strings;
  quotes: QuotesObject[] = [];
  isLoading = false;
  unreadNotificationCount = 0;

  slideOpts = {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    freeMode: false
  };

  constructor(
    private DataService: DataService,
    private router: Router,
    private storage: Storage) { }
    
  async ionViewWillEnter() {
    this.storage.get('userinfo').then(userinfo=>{
      this.DataService.getUnreadCount(userinfo.email).subscribe( resp => {
        this.unreadNotificationCount = resp[0].unreadcount;
    
      });
    });
  }  

  ngOnInit() {

    this.isLoading = true;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    var str_today = yyyy + '-' + mm + '-'+ dd;
    this.DataService.getDataMotivation(str_today)
    .subscribe( resp => {
      this.quotes = resp;
      this.isLoading = false;

  } );

  }

/*   async presentLoading() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      spinner: 'crescent',
      mode: 'ios'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss();
  } */

  openNotifications(){
    if(this.unreadNotificationCount < 1)
      return;
    this.router.navigateByUrl('/notifications');
  }
}
