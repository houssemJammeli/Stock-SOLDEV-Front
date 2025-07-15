import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandeDto } from 'src/app/DTOs/CommandeDto';

export interface Commande {
  id: number;
  dateVente: Date;
  total: number;
  typeLivraison: number;
  etatCommande: number;
  dateLivraisonPrevue: Date;
  lignesCommande: {
    produitId: number;
    quantite: number;
  }[];
}

export interface LigneCommandeDto {
  produitId: number;
  quantite: number;
}

export interface CommandeCreateDto {
  clientId: number;
  total: number;
  lignes: LigneCommandeDto[];
  typeLivraison: number;
}

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiUrl = 'https://localhost:7041/api/Commandes';

  constructor(private http: HttpClient) { }

  creerCommande(dto: CommandeCreateDto): Observable<any> {
    return this.http.post(this.apiUrl, dto);
  }

  getCommandesClient(idClient: number): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.apiUrl}/client/${idClient}`);
  }

  getToutesLesCommandes(): Observable<CommandeDto[]> {
  return this.http.get<CommandeDto[]>('https://localhost:7041/api/Commandes/admin/all');
}
}
