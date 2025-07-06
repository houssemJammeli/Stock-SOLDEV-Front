import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router : Router){ }

  canActivate(): boolean {
    const role = this.authService.getUserRole();
    if (role === 'Admin') return true;

    this.router.navigate(['/login']);
    return false;
  }

}
