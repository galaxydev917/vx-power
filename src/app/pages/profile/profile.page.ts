import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public strings = strings;
  public name: string;
  public since: string;
  public innerHeight: any;
  isLoading = true;
  isWorkouts = false;
  isPosts = false;
  isDiets = false;
  validationsform: FormGroup;
  new_pwd : any;
  confirm_pwd : any;
  constructor(
    public plt: Platform, 
    private router: Router,
    private toastController: ToastController,
    private firebase: FirebaseService,
    private formBuilder: FormBuilder,) {

  }

  ngOnInit() {

  }
  updatePassword() {
    firebase.auth().currentUser.updatePassword(this.confirm_pwd)
      .then(() => {
        this.new_pwd = '';
        this.confirm_pwd = '';
        // this.presentToast('Password updated', false, 'bottom', 1000);
        // this.error = '';
        this.presentToast();

      })
      .catch(err => {
        console.log(` failed ${err}`);
        //this.error = err.message;
      });
}

  async ionViewWillEnter() {

    this.isLoading = true;

    this.name = await this.firebase.getDisplayName();

    this.since = await this.firebase.getCreationTime();

    this.innerHeight = this.plt.height() / 3 + 'px';

    this.isLoading = false;
  }

  toggleWorkouts() {
    this.isWorkouts = !this.isWorkouts;
  }

  togglePosts() {
    this.isPosts = !this.isPosts;
  }

  toggleDiets() {
    this.isDiets = !this.isDiets;
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Password was changed successfully.',
      duration: 3500,
      position: 'top'
    });
    toast.present();
  }

}
