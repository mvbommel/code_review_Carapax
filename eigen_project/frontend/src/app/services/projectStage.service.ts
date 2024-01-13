import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stage } from '../models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ProjectStageService {
    constructor(private http: HttpClient) { }
  
    getProjectStages() {
      return this.http.get<Stage[]>(`${environment.gatewayUrl}/ProjectStage/`);
  
    }
    createProjectStage(ProjectStage: Stage) {
      return this.http.post(`${environment.gatewayUrl}/ProjectStage`, ProjectStage);
    }

    deleteProjectStage(id: Number){
      return this.http.delete(`${environment.gatewayUrl}/ProjectStage/` + id);
    }
  }