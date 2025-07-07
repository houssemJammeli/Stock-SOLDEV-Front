import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur, UtilisateurService } from 'src/app/services/utilisateursService/utilisateur.service';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})

export class ModifierUtilisateurComponent implements OnInit {
  utilisateur!: Utilisateur;

  roles = [
    { value: 0, label: 'Admin' },
    { value: 1, label: 'Client' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.utilisateurService.getById(id).subscribe(data => {
      this.utilisateur = data;
    });
  }

  modifierUtilisateur() {
    this.utilisateurService.update(this.utilisateur).subscribe(() => {
      this.router.navigate(['/admin/utilisateurs']);
    });
  }
}
