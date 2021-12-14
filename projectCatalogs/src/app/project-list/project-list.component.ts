import { Component, OnInit } from '@angular/core';
import { projects } from '../models/mocks/projects.mock';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  searchWord: string;
  projects: Project[];
  ngOnInit(): void {
     this.projectService.getProjects().subscribe((data:Project[])=>this.projects=data);
  }

}
