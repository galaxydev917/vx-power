import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosubcategoryPageRoutingModule } from './videosubcategory-routing.module';

import { VideosubcategoryPage } from './videosubcategory.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    VideosubcategoryPageRoutingModule
  ],
  declarations: [VideosubcategoryPage]
})
export class VideosubcategoryPageModule {}
