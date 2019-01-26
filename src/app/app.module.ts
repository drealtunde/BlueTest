import { AccordionListComponent } from './../components/accordion-list/accordion-list';
import { ProjectPage } from './../pages/project/project';
import { MyProfilePage } from './../pages/my-profile/my-profile';
import { ProjectListPage } from './../pages/project-list/project-list';
import { ProfilePage } from './../pages/profile/profile';
import { TeamPage } from './../pages/team/team';
import { PreloadImage } from './../components/preload-image/preload-image';
import { SignupPage } from './../pages/signup/signup';
import { ForgotPasswordPage } from './../pages/forgot-password/forgot-password';
import { ShowHideInput } from './../components/show-hide-password/show-hide-input';

import { LoginPage } from './../pages/login/login';
import { SlideWalkThroughPage } from './../pages/slide-walk-through/slide-walk-through';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ShowHideContainer } from './../components/show-hide-password/show-hide-container';
import { ToastService } from '../providers/util/toast.service';
import { BackgroundImage } from '../components/background-image/background-image';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SlideWalkThroughPage,
    LoginPage,
    ForgotPasswordPage,
    SignupPage,
    TeamPage,
    ProfilePage,
    ProjectListPage,
    MyProfilePage,
    ProjectPage,
    //Components
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    AccordionListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SlideWalkThroughPage,
    LoginPage,
    ForgotPasswordPage,
    SignupPage,
    TeamPage,
    ProfilePage,
    ProjectListPage,
    MyProfilePage,
    ProjectPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
