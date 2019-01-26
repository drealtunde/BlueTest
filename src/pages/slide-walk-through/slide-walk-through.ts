import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SlideWalkThroughPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide-walk-through',
  templateUrl: 'slide-walk-through.html',
})
export class SlideWalkThroughPage {
  @ViewChild('slider') slider: Slides;
  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/imgs/material-design-background.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/imgs/material-design-background.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/imgs/material-design-background.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/imgs/material-design-background.jpg',
      description: 'Take a look at our amazing options',
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
   
  }

  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
  }

  ionViewDidLoad() {
    this.storage.set('SliderVisited' , true);
  }

 goToLogin(){
  this.navCtrl.setRoot(HomePage);
 }

 goToSignUp(){
  this.navCtrl.setRoot(HomePage);
 }

  skip() {
    this.slider.slideTo(3);
  }

}
