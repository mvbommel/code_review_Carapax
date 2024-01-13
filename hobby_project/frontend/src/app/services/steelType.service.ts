import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { steelType } from '../models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class SteelTypeService {
    constructor(private http: HttpClient) { }
  
    getSteelTypes() {
      return this.http.get<steelType[]>(`${environment.gatewayUrl}/steel/`);
  
    }
    createSteelType(SteelType: steelType) {
     return this.http.post(`${environment.gatewayUrl}/steel`, SteelType);
    }

    deleteSteelType(id: Number){
      return this.http.delete(`${environment.gatewayUrl}/steel/` + id);
    }
  }