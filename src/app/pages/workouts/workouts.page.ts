import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform } from '@ionic/angular';
import { CategoriesObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

  public strings = strings;
  videoMainCategories: CategoriesObject[] = [];
  isLoading = false;
  height: any;
  constructor(
    public plt: Platform,
    private DataService: DataService
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this.height = this.plt.height() / 4.4 + 'px';

    this.DataService.getDataCategories()
    .subscribe( resp => {
      this.videoMainCategories = resp;

      if ( this.videoMainCategories.length === 0 ) {

        this.height = '125.03px';

      } else if ( this.videoMainCategories.length === 3 || this.videoMainCategories.length === 2 ) {

        this.height = 'inherit !important';

      } else if ( this.videoMainCategories.length >= 4 ) {
        this.height = this.plt.height() / 5.45 + 'px';

      }
      this.isLoading = false;

    } );
  }

}
