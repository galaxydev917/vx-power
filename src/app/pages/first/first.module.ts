import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstPageRoutingModule } from './first-routing.module';
import { PipesModule } from '../../pipes/pipes.module';

import { FirstPage } from './first.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}
