import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation';



@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = 'http://localhost:8090/formation'; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) { }
  getApiUrl(): string {
    return this.apiUrl;
  }
  getAllModules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllModules`);
  }
  
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllFormationsSortedByTitle`);
  }
  
  getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl}/retrieveFormation/${id}`);
  }
  
  addFormation(data: Formation): Observable<any> {
    return this.http.post(`${this.apiUrl}/addFormation`, data);
  }
 
  deleteFormation(idFormation: string): Observable<void> {
    const url = `${this.apiUrl}/deleteFormation/${idFormation}`;
    return this.http.delete<void>(url);
  }

  updateFormation(idFormation: any, updatedFormation: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateFormation/${idFormation}`, updatedFormation);
  }

  retrieveFormation(formationId: string): Observable<Formation> {
    const url = `${this.apiUrl}/retrieveFormation/${formationId}`;
    return this.http.get<Formation>(url);
  }
  searchFormationsByTitle(titre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/searchFormationsByTitle/${titre}`);
  }
  participateInFormation(formationId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/participate/${formationId}/${userId}`, {});
  }
}
