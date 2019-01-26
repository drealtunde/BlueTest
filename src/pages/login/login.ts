import { ForgotPasswordPage } from "./../forgot-password/forgot-password";
import { SignupPage } from "./../signup/signup";
import { HomePage } from "./../home/home";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  MenuController
} from "ionic-angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false,'menu-material');
    this.main_page = { component: HomePage };

    this.login = new FormGroup({
      email: new FormControl("tunde@gmail.com", Validators.required),
      password: new FormControl("test", Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  doLogin() {
    this.navCtrl.setRoot(this.main_page.component);
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  goToForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
}
