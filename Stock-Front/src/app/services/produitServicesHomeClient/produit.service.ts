import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitDto } from 'src/app/DTOs/ProduitDTO';

@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  private apiUrl = 'https://localhost:7041/api/Produits';

  constructor(private http: HttpClient) { }

  getTousProduits(): Observable<ProduitDto[]> {
    return this.http.get<ProduitDto[]>(this.apiUrl);
  }

  update(produit: any): Observable<string> {
      return this.http.put<string>(`${this.apiUrl}/${produit.get("Id")}`, produit);
    }
}
