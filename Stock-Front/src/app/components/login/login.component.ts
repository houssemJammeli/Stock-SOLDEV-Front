import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}


  login() {
    this.authService.login(this.model).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);

        const role = this.authService.getUserRole();

        if (role === 'Admin') {
          this.router.navigate(['/admin']); 
        } else if (role === 'Client') {
          this.router.navigate(['/client']);
        } else {
          this.router.navigate(['/']); // fallback
        }
      },
      error: err => {
        alert('Email ou mot de passe incorrect.');
      }
    });
  }
}
