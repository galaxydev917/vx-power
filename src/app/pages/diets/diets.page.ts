import { Component, OnInit, ViewChild } from '@angular/core';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';
import { DietsObject, CategoriesObject } from '../../interfaces/interfaces';
import {IonSlides} from '@ionic/angular/';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.page.html',
  styleUrls: ['./diets.page.scss'],
})
export class DietsPage implements OnInit {

  public strings = strings;
  diets: DietsObject[] = [];
  categories: CategoriesObject[] = [];
  isLoading = false;
  isReady = true;
  unreadNotificationCount = 0;
  rowHeight : any;
  slider_height: any;
  categorytext_height: any;
  slideOpts = {
    initialSlide: 1,
    speed: 300,
    autoplay:true
  };
  @ViewChild('featuredProductSlider', {static: false}) slider: IonSlides;
  
  constructor(
    private DataService: DataService,
    private router: Router,
    private storage: Storage,
    public plt: Platform
    ) { }

  async ionViewWillEnter() {
    this.storage.get('userinfo').then(userinfo=>{
      this.DataService.getUnreadCount(userinfo.email).subscribe( resp => {
        this.unreadNotificationCount = resp[0].unreadcount;
    
      });
    });
  }   
  ionViewWillLeave(){
    this.slider.stopAutoplay();

  }
  ionViewDidEnter() {
    this.slider.startAutoplay();
  }

  ngOnInit() {
    this.rowHeight = this.plt.height() * 2 / 9 + 'px';
    this.isLoading = true;
    this.slider_height = window.innerHeight / 3 -40 + 'px';
    this.categorytext_height = 20 + 'px';
    this.DataService.getDataFeaturedDiets()
    .subscribe( resp => {
      this.diets = resp;
      this.isReady = true;
    });
    this.DataService.getDataCategories().subscribe( resp => {
      this.categories = resp;
      this.isLoading = false;
    });
  }
  openNotifications(){
    if(this.unreadNotificationCount < 1)
      return;
    this.router.navigateByUrl('/notifications');
  }
}
