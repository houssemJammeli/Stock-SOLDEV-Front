import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Commande, CommandeService } from 'src/app/services/commandesService/commande.service';

@Component({
  selector: 'app-historique-commandes',
  templateUrl: './historique-commandes.component.html',
  styleUrls: ['./historique-commandes.component.css']
})
export class HistoriqueCommandesComponent implements OnInit {

  commandes: Commande[] = [];

  constructor(private commandeService: CommandeService, private authService: AuthService) {}

  ngOnInit(): void {
    const id = this.authService.getUserId();
    if (id) {
      this.commandeService.getCommandesClient(id).subscribe({
        next: data => this.commandes = data,
        error: err => console.error('Erreur chargement commandes', err)
      });
    }
  }

  getEtatText(etat: number): string {
    switch (etat) {
      case 0: return '📦 Préparation';
      case 1: return '🚚 En cours de livraison';
      case 2: return '✅ Livrée';
      default: return '❓ Inconnu';
    }
  }

  getLivraisonText(type: number): string {
    return type === 0 ? 'Standard (5 TND)' : 'Express (10 TND)';
  }
}
