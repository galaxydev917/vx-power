import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { strings } from '../../config/strings';
import { VideoSubCategoryObject } from '../../interfaces/interfaces';

@Component({
  selector: 'app-videosubcategory',
  templateUrl: './videosubcategory.page.html',
  styleUrls: ['./videosubcategory.page.scss'],
})

export class VideosubcategoryPage implements OnInit {
  public strings = strings;
  title: string;
  isLoading = false;
  id: any;
  height: any;
  subcategories: VideoSubCategoryObject[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform
  ) { }

  async ionViewWillEnter() {
    this.isLoading = true;
    this.route.params.subscribe(
      data => {
        this.id = data.id;
        this.title = data.title;
        this.getSubcategories();

        if (!this.id) {
          this.goBack();
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  getSubcategories() {
    this.dataService.getVideoSubCategories(this.id)
    .subscribe( resp => {
      this.subcategories = resp;

      if ( this.subcategories.length === 1 ) {
        this.height = '167.273px';
      } else if ( this.subcategories.length === 3 || this.subcategories.length === 2 ) {
        this.height = 'inherit !important';
      } else if ( this.subcategories.length >= 4 ) {
        this.height = this.plt.height() / 4.4 + 'px';
      }
      this.isLoading = false;
    });
  }
}
