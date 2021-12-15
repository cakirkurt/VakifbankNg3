import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../models/mocks/projects.mock';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectService: ProjectService, private activeRoute: ActivatedRoute) { }

  projectIsExist: boolean = false;
  searchWord: string;
  projects: Project[];
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data: Project[]) => this.projects = data);
    this.activeRoute.params.subscribe((data) => {
      data["id"] != undefined ?
        this.projectService.getProjectsByCategoryId(data["id"])
          .subscribe((data: Project[]) => {
            this.projects = data;
            this.projectIsExist = this.projects.length > 0;
            console.log('proje var mı:',this.projectIsExist); 
          })
        :
        this.projectService.getProjects()
          .subscribe((data: Project[]) => {
            this.projects = data;
            this.projectIsExist = this.projects.length>0;
            console.log('proje var mı:',this.projectIsExist);
          })

    });

   
  }

}
