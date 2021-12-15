import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category.model';
import { Project } from '../models/project.model';
import { CategoryService } from '../services/category.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private categoryService: CategoryService, 
              private projectService: ProjectService) { }
  
  project: Project = new Project();
  categories: Category[];

  ngOnInit(): void {
     this.categoryService.getAllCategories()
                         .subscribe((data:Category[])=>this.categories=data);
  }

  addProject(form: NgForm){
    
    if (form.valid) {
      this.project =  form.value;
      //console.log(this.project);
      this.projectService.addNewProject(this.project).subscribe((data)=>alert(data.name + " projesi eklendi"));
    }
  }

}
