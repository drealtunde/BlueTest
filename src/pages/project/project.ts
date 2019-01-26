import { TaskModel } from './../../models/profile.model';

import { ProjectModel } from '../../models/profile.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, SegmentButton } from 'ionic-angular';

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {
  display: string;
  project: ProjectModel;
  coverImage = '../../assets/imgs/mobile-project-background.jpg';
  noOfTasks: number;
  myTasksCount: number;
  myTasks: TaskModel[] = [];
  profileName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.display = 'allTasks'
    this.project = this.navParams.get('project');
    this.myTasksCount = 0;
    this.profileName = this.navParams.get('profileName')
  }

  ionViewDidLoad() {
      this.project.task.forEach((task) => {
        if (task.assignedTo === this.profileName) {
          this.myTasks.push(task);
          this.myTasksCount++;
        }
     
    })
    this.noOfTasks = this.project.task.length;
    
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    console.log(segmentButton);
    
  }

}
