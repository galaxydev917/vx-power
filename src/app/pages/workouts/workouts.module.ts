import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutsPageRoutingModule } from './workouts-routing.module';
import { PipesModule } from '../../pipes/pipes.module';

import { WorkoutsPage } from './workouts.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutsPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [WorkoutsPage]
})
export class WorkoutsPageModule {}
