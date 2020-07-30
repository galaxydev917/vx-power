import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'termsguest',
    loadChildren: () => import('./pages/termsguest/termsguest.module').then( m => m.TermsguestPageModule)
  },
  {
    path: 'termsguest',
    loadChildren: () => import('./pages/termsguest/termsguest.module').then( m => m.TermsguestPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./pages/first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'videosubcategory/:id/:title',
    loadChildren: () => import('./pages/videosubcategory/videosubcategory.module').then( m => m.VideosubcategoryPageModule)
  },
  {
    path: 'videolist/:id/:title',
    loadChildren: () => import('./pages/videolist/videolist.module').then( m => m.VideolistPageModule)
  },
  {
    path: 'diets',
    loadChildren: () => import('./pages/diets/diets.module').then( m => m.DietsPageModule)
  },
  {
    path: 'ddetails/:id',
    loadChildren: () => import('./pages/ddetails/ddetails.module').then( m => m.DdetailsPageModule)
  },
  {
    path: 'cdiets/:id/:title',
    loadChildren: () => import('./pages/cdiets/cdiets.module').then( m => m.CdietsPageModule)
  },
  {
    path: 'motivation',
    loadChildren: () => import('./pages/motivation/motivation.module').then( m => m.MotivationPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./pages/calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'bmiinfo',
    loadChildren: () => import('./pages/bmiinfo/bmiinfo.module').then( m => m.BmiinfoPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
