import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProjectCreateRequest } from '../models';

@Injectable({
  providedIn: 'root',
})

export class ProjectService {
    constructor(private http: HttpClient) { }
  
    getProjects() {
      return this.http.get<Project[]>(`${environment.gatewayUrl}/project/`);
  
    }
  
    getDetailsById(id: number) {
      return this.http.get<Project>(`${environment.gatewayUrl}/project/id/` + id);
    }

    createProject(Project: Project) {
      console.log(Project);
      return this.http.post(`${environment.gatewayUrl}/project/`, Project);
    }

    editProject(Project: Project) {
      console.log(Project);
      return this.http.put(`${environment.gatewayUrl}/project/`, Project);
    }

    deleteProject(id: Number){
      return this.http.delete(`${environment.gatewayUrl}/project/` + id);
    }
  }