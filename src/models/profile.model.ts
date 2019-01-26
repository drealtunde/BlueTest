export class ProfileModel {
  image: string;
  team: string;
  about: string;
  email: string;
  phone: string;
  name: string;
  website: string;
  role: string;
  project: ProjectModel[];
  
 
}

export class ProjectModel{
  name: string;
  type: string;
  image: string;
  description: string;
  framework: string;
  language: string;
  task: TaskModel[];
}

export class TaskModel{
  taskName: string;
  taskDescription: string;
  taskRating: any;
  taskComment: string;
  assignedTo: string;
  completed: boolean;
}
