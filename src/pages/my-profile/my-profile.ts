import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileModel } from '../../models/profile.model';
import { TeamPage } from '../team/team';
import { ProjectListPage } from '../project-list/project-list';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  display: string;
  profile: ProfileModel = new ProfileModel();
  noOfTasks: number;
  noOfProjects: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profile = ({
      role: "QA Team Lead",
      image: `../../assets/imgs/avatar/profile_picture.jpeg`,
      name: `Promise Okoh`,
      team: "Team Phantom",
      about:
        "Philosophy is considered a science but it is difficult to say, when one has to compare with an ordinary science, for example biology, or chemistry.",
      email: "promiseOkoh@gmail.com",
      phone: "08192833431",
      website: "github.com/Opromise",
      project: [
        {
          name: "School App",
          type: "Mobile",
          image: "../../assets/imgs/appIcons/app-1.png",
          framework: "Ionic",
          language: "Typescript",
          description:
            "At the Crossfit WorldWide Event athletes at compete in workouts that they learn about hours or days beforehand, consisting mostly of an assortment of standard aerobic, weightlifting, and gymnastics movement.",
          task: [
            {
              taskName: "Responsive Pages",
              taskDescription: "Check that all Pages are responsive",
              taskRating: null,
              taskComment: null,
              assignedTo: 'Member 1',
              completed: false
            },
            {
              taskName: "Sign In and Sign Up works",
              taskDescription:
                "Check that all instances of signing in and signing up works",
              taskRating: 3,
              taskComment: 'Sign in works perfectly but there are no other options of signing up apart from with email.',
              assignedTo: 'Member 1',
              completed: true
            },
            {
              taskName: "Students can check results",
              taskDescription: "Check that students can check their results.",
              taskRating: null,
              taskComment: null,
              assignedTo: 'Member 2',
              completed: false
            },
            {
              taskName: "Students can register Courses",
              taskDescription:
                "Check that students can register courses",
              taskRating: 4,
              taskComment: 'Students are able to register and see details of courses.',
              assignedTo: 'Member 2',
              completed: true
            },
            {
              taskName: "Students can change courses ",
              taskDescription: "Check that students can change courses",
              taskRating: null,
              taskComment: null,
              assignedTo: 'Member 2',
              completed: false
            },
            {
              taskName: "Insepct the design of the App",
              taskDescription:
                "Check that all design rules are kept.",
              taskRating: null,
              taskComment: null,
              assignedTo: 'Member 3',
              completed: false
            }
          ]
        },
        {
          name: "Banking  App",
          type: "Mobile",
          framework: "Android",
          image: "../../assets/imgs/appIcons/app-2.png",
          language: "Java",
          description:
            "The Basketball Tournament (TBT) is an open-application, single-elimination tournament played each summer in the United States, currently featuring 64 teams. It was founded in 2014 by Jonathan Mugar.",
            task: [
              {
                taskName: "Responsive Pages",
                taskDescription: "Check that all Pages are responsive",
                taskRating: null,
                taskComment: null,
                assignedTo: 'Member 1',
                completed: false
              },
              {
                taskName: "Sign In and Sign Up works",
                taskDescription:
                  "Check that all instances of signing in and signing up works",
                taskRating: 3,
                taskComment: 'Sign in works perfectly but there are no other options of signing up apart from with email.',
                assignedTo: 'Member 1',
                completed: true
              },
              {
                taskName: "Students can check results",
                taskDescription: "Check that students can check their results.",
                taskRating: null,
                taskComment: null,
                assignedTo: 'Member 2',
                completed: false
              },
              {
                taskName: "Students can register Courses",
                taskDescription:
                  "Check that students can register courses",
                taskRating: 4,
                taskComment: 'Students are able to register and see details of courses.',
                assignedTo: 'Member 2',
                completed: true
              },
              {
                taskName: "Students can change courses ",
                taskDescription: "Check that students can change courses",
                taskRating: null,
                taskComment: null,
                assignedTo: 'Member 2',
                completed: false
              },
              {
                taskName: "Insepct the design of the App",
                taskDescription:
                  "Check that all design rules are kept.",
                taskRating: null,
                taskComment: null,
                assignedTo: 'Member 3',
                completed: false
              }
            ]
        }
      ]
    });
  }

  ionViewDidLoad() {
    this.noOfTasks = 0;
    this.noOfProjects = this.profile.project.length;
    this.profile.project.forEach((project)=> {
      this.noOfTasks += project.task.length;
    })
  
  }

  doTeamPage(){
    this.navCtrl.push(TeamPage);
  }

  goToProjects(){
    this.navCtrl.push(ProjectListPage, {
      projectList: this.profile.project
    });
    console.log(this.profile.project);
    
  }

}
