import { ProfilePage } from "./../profile/profile";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ToastService } from "../../providers/util/toast.service";
import { ProfileModel } from "../../models/profile.model";

/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-team",
  templateUrl: "team.html"
})
export class TeamPage {
  members: ProfileModel[] = [];
  following = false;
  team = {
    name: "Team Phantom",
    profileImage: "../../assets/imgs/avatar/girl-avatar.png",
    coverImage: "../../assets/imgs/background-2.jpg",
    occupation: "Mobile Application Developers",
    location: "Lagos, NG",
    description:
      "A wise man once said: The more you do something, the better you will become at it.",
    projects: 15,
    members: 5
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastService
  ) {
    for (let index = 0; index < 5; index++) {
      this.members.push({
        role: "QA Tester",
        image: `../../assets/imgs/members/member-${index}.jpg`,
        name: `Member ${index}`,
        team: "Team Phantom",
        about:
          "Philosophy is considered a science but it is difficult to say, when one has to compare with an ordinary science, for example biology, or chemistry.",
        email: "tunde.areola@gmail.com",
        phone: "08181418735",
        website: "github.com/drealtunde",
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
  }

  ionViewDidLoad() {
    console.log(this.members);

    console.log("ionViewDidLoad TeamPage");
  }

  doProfile(m) {
    console.log(m);
    
    this.navCtrl.push(ProfilePage, { member: m });
  }
}
