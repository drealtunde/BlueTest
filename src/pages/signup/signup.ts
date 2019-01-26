import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signup: FormGroup;
  main_page: { component: any };
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.main_page = { component: HomePage };

    this.signup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup(){
    this.navCtrl.setRoot(this.main_page.component);
  }

  showPrivacyModal(){
    console.log('Privacy Policy clicked');
    
  }

  showTermsModal(){
    console.log('Terms clicked');
  }

}
