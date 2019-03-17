import { MyProfilePage } from './../pages/my-profile/my-profile';
import { TeamPage } from './../pages/team/team';
import { LoginPage } from './../pages/login/login';
import { SlideWalkThroughPage } from './../pages/slide-walk-through/slide-walk-through';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProjectListPage } from '../pages/project-list/project-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  activePage: any;

  rootPage: any;

  pages: Array<{title: string, component: any, active: boolean, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage) {
    this.initializeApp();
    this.storage.get('SliderVisited').then((sliderVisited) => {
      if (sliderVisited === true) {
        this.rootPage = LoginPage;
      }
      else {
        this.rootPage = SlideWalkThroughPage;
      }
    }).catch((err) => {
      console.log(err);
      
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, active: true, icon: 'home' },
      { title: 'Team', component: TeamPage, active: false, icon: 'body' },
      { title: 'Profile', component: MyProfilePage, active: false, icon: 'camera' },
      { title: 'Projects', component: ProjectListPage, active: false, icon: 'bookmark' },
    ];

    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page) {
    return page == this.activePage;
    
    
  }

  goToProfile(){
    this.nav.setRoot(MyProfilePage);
  }
}
