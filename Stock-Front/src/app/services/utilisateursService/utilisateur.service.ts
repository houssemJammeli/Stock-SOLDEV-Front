import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Utilisateur {
  id: number;
  nom: string;
  email: string;
  password: string;
  telephone: string;
  adresse: string;
  role: number; // 0 = Admin, 1 = Client
}

@Injectable({
  providedIn: 'root'
})


export class UtilisateurService {
  private apiUrl = 'https://localhost:7041/api/Utilisateurs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  getById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${id}`);
  }

  update(utilisateur: Utilisateur): Observable<any> {
    return this.http.put(`${this.apiUrl}/${utilisateur.id}`, utilisateur);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
