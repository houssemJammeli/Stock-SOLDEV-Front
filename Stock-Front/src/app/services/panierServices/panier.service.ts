import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitDto } from 'src/app/DTOs/ProduitDTO';

export interface LignePanierDTO {
  quantite: number;
  produitId: number;
}

export interface PanierDTO {
  lignes: LignePanierDTO[];
}

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  totalPrixTemporaire: number = 0;
  fraisLivraisonTemporaire: number = 5;
  produitsDansPanierTemp: { produit: ProduitDto, quantite: number }[] = [];

  private apiUrl = 'https://localhost:7041/api/Panier';
  constructor(private http: HttpClient) { }

  Get(): Observable<PanierDTO> {
    return this.http.get<PanierDTO>(`${this.apiUrl}`);
  }

  AjouterProduitAuPanier(ligne: LignePanierDTO): Observable<PanierDTO> {
    return this.http.post<PanierDTO>(`${this.apiUrl}`, ligne);
  }

  SupprimerProduitAuPanier(ligne: LignePanierDTO): Observable<PanierDTO> {
    return this.http.request<PanierDTO>('DELETE', this.apiUrl, {
      body: ligne
    });
  }
}
