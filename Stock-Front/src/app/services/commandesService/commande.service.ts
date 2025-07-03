import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface LigneCommande {
  produitId: number;
  quantite: number;
  produit?: any;
}

export interface Commande {
  id: number;
  clientId: number;
  dateVente: string | null;
  total: number;
  lignesCommande: LigneCommande[];
}

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiUrl = 'http://localhost:5000/api/Commandes'; 

  constructor(private http: HttpClient) {}


  validerPanier(clientId: number) {
    return this.http.post(`${this.apiUrl}/panier/valider`, clientId);
  }
}
