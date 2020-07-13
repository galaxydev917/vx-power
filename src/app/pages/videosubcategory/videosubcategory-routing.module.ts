import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosubcategoryPage } from './videosubcategory.page';

const routes: Routes = [
  {
    path: '',
    component: VideosubcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosubcategoryPageRoutingModule {}
