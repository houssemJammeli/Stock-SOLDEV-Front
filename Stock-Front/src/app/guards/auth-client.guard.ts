import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthClientGuard implements CanActivate {
  constructor(private authService: AuthService, private router : Router){ }

  canActivate(): boolean {
    const role = this.authService.getUserRole();
    if (role === 'Client') return true;

    this.router.navigate(['/login']);
    return false;
  }
  
}
