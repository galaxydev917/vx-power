import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { NotificationObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public strings = strings;
  notificationlist: NotificationObject[] = [];
  isLoading = false;
  loginedEmail = "";

  constructor(
    private DataService: DataService,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.getUserInfo();
    
  }
  clearNotifications(){
    this.storage.get('userinfo').then(userinfo=>{
      this.DataService.readNotifications(userinfo.email).subscribe( resp => {
        this.notificationlist = resp;
      });
     });
  }
  async getUserInfo() {
   this.storage.get('userinfo').then(userinfo=>{
    this.DataService.getUnreadNotifications(userinfo.email).subscribe( resp => {
      this.notificationlist = resp;
      this.isLoading = false;   
    });
   });
  }
}
