import { ProjectPage } from "./../project/project";
import { Component, ViewChild } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";
import chartJs from "chart.js";

import "rxjs/Rx";
import { AddProjectPage } from "../add-project/add-project";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  projects: any;
  headerImage = "./assets/imgs/header.jpg";
  @ViewChild("halfDoughnutCanvas") halfDoughnutCanvas;
  halfDoughnutChart: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, "menu-material");

    this.projects = [
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
            assignedTo: "Member 1",
            completed: false
          },
          {
            taskName: "Sign In and Sign Up works",
            taskDescription:
              "Check that all instances of signing in and signing up works",
            taskRating: 3,
            taskComment:
              "Sign in works perfectly but there are no other options of signing up apart from with email.",
            assignedTo: "Member 1",
            completed: true
          },
          {
            taskName: "Students can check results",
            taskDescription: "Check that students can check their results.",
            taskRating: null,
            taskComment: null,
            assignedTo: "Member 2",
            completed: false
          },
          {
            taskName: "Students can register Courses",
            taskDescription: "Check that students can register courses",
            taskRating: 4,
            taskComment:
              "Students are able to register and see details of courses.",
            assignedTo: "Member 2",
            completed: true
          },
          {
            taskName: "Students can change courses ",
            taskDescription: "Check that students can change courses",
            taskRating: null,
            taskComment: null,
            assignedTo: "Member 2",
            completed: false
          },
          {
            taskName: "Insepct the design of the App",
            taskDescription: "Check that all design rules are kept.",
            taskRating: null,
            taskComment: null,
            assignedTo: "Member 3",
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
            assignedTo: "Member 1",
            completed: false
          },
          {
            taskName: "Sign In and Sign Up works",
            taskDescription:
              "Check that all instances of signing in and signing up works",
            taskRating: 3,
            taskComment:
              "Sign in works perfectly but there are no other options of signing up apart from with email.",
            assignedTo: "Member 1",
            completed: true
          },
          {
            taskName: "Students can check results",
            taskDescription: "Check that students can check their results.",
            taskRating: null,
            taskComment: null,
            assignedTo: "Member 2",
            completed: false
          },
          {
            taskName: "Students can register Courses",
            taskDescription: "Check that students can register courses",
            taskRating: 4,
            taskComment:
              "Students are able to register and see details of courses.",
            assignedTo: "Member 2",
            completed: true
          },
          {
            taskName: "Students can change courses ",
            taskDescription: "Check that students can change courses",
            taskRating: null,
            taskComment: null,
            assignedTo: "Member 2",
            completed: false
          },
          {
            taskName: "Insepct the design of the App",
            taskDescription: "Check that all design rules are kept.",
            taskRating: null,
            taskComment: null,
            assignedTo: "Member 3",
            completed: false
          }
        ]
      }
    ];
  }

  openProject(project) {
    this.navCtrl.push(ProjectPage, {
      project: project
    });
  }

  ngAfterViewInit(): void {
    this.halfDoughnutChart = this.getHalfDoughnutChart();
    
  }

  getHalfDoughnutChart() {
    const data = {
      labels: ["Banking App", "School App"],
      datasets: [
        {
          label: "No. of Tasks",
          data: [25, 10],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
          
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
          ]
        }
      ]
    };

    const options = {
      circumference: Math.PI,
      rotation: 1.0 * Math.PI
    };

    return this.getChart(
      this.halfDoughnutCanvas.nativeElement,
      "doughnut",
      data,
      options
    );
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    });
  }

  addProject() {
    this.navCtrl.push(AddProjectPage);
    
  }
}
