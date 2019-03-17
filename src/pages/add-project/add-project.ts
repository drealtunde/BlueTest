import { Crop } from '@ionic-native/crop/ngx';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, normalizeURL, SegmentButton } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ProfileModel } from '../../models/profile.model';

/**
 * Generated class for the AddProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {
  members = [];
  section: string;

  post_form: any;
  event_form: FormGroup;
  card_form: FormGroup;

  categories_checkbox_open: boolean;
  categories_checkbox_result;

  selected_image: any;
  taskFormCounter: number = 0;
  tasks = [];
  checkboxTagsForm: FormGroup;
  membersWithIndex: any[] = [];
  counter = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public cropService: Crop,
    public imagePicker: ImagePicker,
    public platform: Platform, public fb: FormBuilder) {


      this.section = "post";
      for (let index = 0; index < 5; index++) {
        this.members.push({
          // isChecked: false,
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
      this.post_form = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
      });
      this.event_form = new FormGroup({
        title: new FormControl('', Validators.required),
        taskDescription: new FormControl('', Validators.required)
      });
      this.card_form = new FormGroup({
        card_number: new FormControl('', Validators.required),
        card_holder: new FormControl('', Validators.required),
        cvc: new FormControl('', Validators.required),
        exp_date: new FormControl('', Validators.required),
        save_card: new FormControl(true, Validators.required)
      });

      this.checkboxTagsForm = this.fb.group({
        member_id : this.fb.array([]),
      })


  
     

    

  }


  initAddress(i,taskNumber) {
    var ans = `task_${taskNumber}member_${i}`;

    return this.fb.group({
      [ans]: [false]
    });
  }

  


  chooseCategory(){
    let alert = this.alertCtrl.create({
      cssClass: 'category-prompt'
    });
    alert.setTitle('Choose Tags');

    alert.addInput({
      type: 'checkbox',
      label: 'Mobile',
      value: 'mobile',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Web',
      value: 'web'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Javascript',
      value: 'javascript'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Java',
      value: 'java'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Ionic',
      value: 'ionic'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'PWA',
      value: 'pwa'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Android',
      value: 'android'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Confirm',
      handler: data => {
        this.section = 'post';
        console.log('Checkbox data:', data);
        this.categories_checkbox_open = false;
        this.categories_checkbox_result = data;
      }
    });
    alert.present().then(() => {
      this.section = 'post';
      this.categories_checkbox_open = true;
    });
  }

  openImagePicker(){
   this.imagePicker.hasReadPermission().then(
     (result) => {
       if(result == false){
         // no callbacks required as this opens a popup which returns async
         this.imagePicker.requestReadPermission();
       }
       else if(result == true){
         this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(
           (results) => {
             for (var i = 0; i < results.length; i++) {
               this.cropService.crop(results[i], {quality: 75}).then(
                 newImage => {
                   let image  = normalizeURL(newImage);
                   this.selected_image = image;
                 },
                 error => console.error("Error cropping image", error)
               );
             }
           }, (err) => console.log(err)
         );
       }
     }
   )
  }

  next() {
    console.log(this.tasks);
   this.section === 'post' ? this.section = 'event':this.section = 'assign';
    
  }

  addTask() {
    console.log(this.tasks);
    
    this.tasks.push({
      'member': [],
      'title': "",
      'description': ""
    })

    for(let i =0; i < this.members.length; i++) {
      const control = <FormArray>this.checkboxTagsForm.controls['member_id'];
      control.push(this.initAddress(i,this.tasks.length-1));
      console.log(this.checkboxTagsForm);

     if (i == 0) {
      this.tasks[this.tasks.length-1].member.push({
        
        taskIndex: this.counter,
        memberName: this.members[i].name,
        memberIndex: i + (5 * this.counter ) 
      })
       continue;
     } else {
      this.tasks[this.tasks.length-1].member.push({

         taskIndex: this.counter,
         memberName: this.members[i].name,
         memberIndex: i + (5 * this.counter ) 
       })
       if (i % (this.members.length - 1) == 0){
         this.counter++;
       }
     }
      
    }
    console.log(this.tasks);
    
    
    
  }

  // getMembers() {
   
    
  
    
  //     this.members.forEach((member, i) => {
  //       console.log(i);
        
  //       this.membersWithIndex.push({
  //         memberName: member.name,
  //         memberIndex: i + (5 * this.counter)
  //       })

  //       if (i !== 0) {
  //         if (i % (this.members.length -1) == 0){
  //           this.counter++;
  //         }
  //       }
  //     })
  //   console.log(this.membersWithIndex);
    
  //   return this.membersWithIndex;
  //   }

  assignMember(){
    console.log(this.tasks);
    
    // this.tasks[taskIndex].member[memberIndex]=
        
    
  }




}
