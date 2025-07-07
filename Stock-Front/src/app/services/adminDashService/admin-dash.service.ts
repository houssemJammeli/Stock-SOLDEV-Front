import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashService {

  private apiUrl = 'https://localhost:7041/api/AdminDashboard';

  constructor(private http: HttpClient) {}

  // 📊 Récupère les statistiques globales : commandes, ventes, profit, revenu
  getStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats`);
  }

  // 📝 Récupère les ventes récentes (tableau)
  getVentesRecentes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ventes-recentes`);
  }

  // 🥇 Récupère les produits les plus vendus
  getTopProduits(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/top-produits`);
  }

}
