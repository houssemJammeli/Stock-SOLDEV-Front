import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { RegisterDto } from '../DTOs/RegisterDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:7041/api/Auth';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(data: RegisterDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // ✅ Décoder le token pour obtenir les infos (comme le rôle)
  getDecodedToken(): any {
    debugger
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwt_decode.jwtDecode(token);
    } catch (error) {
      console.error("Erreur de décodage du token", error);
      return null;
    }
  }

  // ✅ Obtenir le rôle de l'utilisateur connecté
  getUserRole(): string | null {
    const decoded = this.getDecodedToken();
    return decoded?.["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || null; // 'role' = nom dans le claim JWT
  }

  // (Optionnel) Obtenir le nom d'utilisateur
  getUserName(): string | null {
    const decoded = this.getDecodedToken();
    return decoded?.sub || null; // souvent 'sub' pour l'identifiant
  }
}

