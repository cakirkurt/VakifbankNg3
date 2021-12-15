import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url: string ='https://localhost:44300/api/Projects';
  constructor(
   private httpClient: HttpClient
  ) { }
  
  getProjects():Observable<Project[]>
  {
    return this.httpClient.get<Project[]> (this.url);
  }

  getProjectsByCategoryId(id:number):Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.url+"/"+id);
    
  }
  addNewProject(project:Project):Observable<Project> {
    let option = {
      headers: new HttpHeaders({
         'Content-Type':'application/json',
         'Authorization':'Bearer [JWT]'
      })
    }
     return this.httpClient.post(this.url,project,option);

  } 


}
