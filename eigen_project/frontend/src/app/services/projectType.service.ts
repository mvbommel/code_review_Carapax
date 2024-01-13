import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from '../models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ProjectTypeService {
    constructor(private http: HttpClient) { }
  
    getProjectTypes() {
      return this.http.get<Type[]>(`${environment.gatewayUrl}/ProjectType/`);
  
    }
    createProjectType(ProjectType: Type) {
     return this.http.post(`${environment.gatewayUrl}/ProjectType`, ProjectType);
    }

    deleteProjectType(id: Number){
      return this.http.delete(`${environment.gatewayUrl}/ProjectType/` + id);
    }
  }