import { ProjectListPage } from './../project-list/project-list';
import { TeamPage } from './../team/team';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProfileModel } from "../../models/profile.model";


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  display: string;
  profile: ProfileModel = new ProfileModel();
  noOfTasks: number;
  noOfProjects: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profile = this.navParams.get('member');
  }

  ionViewDidLoad() {
    this.noOfTasks = 0;
    this.noOfProjects = this.profile.project.length;
    this.profile.project.forEach((project)=> {
      project.task.forEach((task) => {
        if (task.assignedTo === this.profile.name) {
          this.noOfTasks++;
        }
      })
     
    })
  

    
  }

  doTeamPage(){
    this.navCtrl.push(TeamPage);
  }

  goToProjects(){
    this.navCtrl.push(ProjectListPage, {
      projectList: this.profile.project,
      noOfTasks: this.noOfTasks,
      profileName: this.profile.name
    });
    console.log(this.profile.project);
    console.log(this.noOfTasks);
    
    
  }
}
