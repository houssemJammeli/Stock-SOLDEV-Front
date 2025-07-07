import { Component, OnInit } from '@angular/core';
import { Utilisateur, UtilisateurService } from 'src/app/services/utilisateursService/utilisateur.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})

export class ListeUtilisateursComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];

  roles = [
    { value: 0, label: 'Admin' },
    { value: 1, label: 'Client' }
  ];

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.chargerUtilisateurs();
  }

  chargerUtilisateurs() {
    this.utilisateurService.getAll().subscribe(data => {
      this.utilisateurs = data;
    });
  }

  supprimerUtilisateur(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.utilisateurService.delete(id).subscribe(() => {
        this.chargerUtilisateurs();
      });
    }
  }

  getRoleLabel(roleValue: number): string {
    return this.roles.find(r => r.value === roleValue)?.label || 'Inconnu';
  }
}
