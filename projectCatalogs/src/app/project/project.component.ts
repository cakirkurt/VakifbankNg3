import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { 
    this.incompletedTaskCount = this.project?.tasks?.filter(x=>!x.isCompleted).length;
    
  }

  @Input('projectInParent') project: Project;

  incompletedTaskCount :number | undefined = 0;

  ngOnInit(): void {
    this.incompletedTaskCount = this.project.tasks?.filter(x=>!x.isCompleted).length;
  }
  
  getIncompletedTaskCount(){
      this.incompletedTaskCount = this.project.tasks?.filter(x=>!x.isCompleted).length;
      console.log(this.incompletedTaskCount);
      return  this.incompletedTaskCount;
  }


}
