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
    next: (res) => {
      console.log("Token reçu :", res.token); // debug
      this.authService.saveToken(res.token);


      this.router.navigate(['/admin']); 
    },
    error: () => {
      alert("Identifiants incorrects");
    }
  });
}
}
