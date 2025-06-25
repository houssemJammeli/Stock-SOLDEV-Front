import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Fournisseur {
  id?: number;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
}

export interface FournisseurCreateDto {
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
}

export interface FournisseurUpdateDto {
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
}

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private apiUrl = 'https://localhost:7041/api/Fournisseurs';

  constructor(private http: HttpClient) {}

  getFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl);
  }

  addFournisseur(fournisseur: FournisseurCreateDto): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.apiUrl, fournisseur);
  }

  updateFournisseur(id: number, dto: FournisseurUpdateDto): Observable<void> {
  return this.http.put<void>(`${this.apiUrl}/${id}`, dto);
}

  deleteFournisseur(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}
