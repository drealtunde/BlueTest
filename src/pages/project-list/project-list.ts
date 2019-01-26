import { ProjectPage } from './../project/project';
import { ProjectModel } from '../../models/profile.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage {
  projectList : ProjectModel [];
  noOfTasks: number;
  profileName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.projectList = this.navParams.get('projectList');
    this.noOfTasks = this.navParams.get('noOfTasks');
    this.profileName = this.navParams.get('profileName');
  }

  openProject(project) {
    this.navCtrl.push(ProjectPage, {
      project: project,
      noOfTasks: this.noOfTasks,
      profileName: this.profileName
    });
    console.log(project);
    console.log(this.noOfTasks);
    
    
  }



}
