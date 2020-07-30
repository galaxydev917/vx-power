import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideolistPageRoutingModule } from './videolist-routing.module';
import { PipesModule } from '../../pipes/pipes.module';

import { VideolistPage } from './videolist.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    VideolistPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VideolistPage]
})
export class VideolistPageModule {}
