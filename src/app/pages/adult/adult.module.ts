import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultPageRoutingModule } from './adult-routing.module';

import { AdultPage } from './adult.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdultPage]
})
export class AdultPageModule {}
