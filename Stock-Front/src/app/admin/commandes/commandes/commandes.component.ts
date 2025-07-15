import { Component, OnInit } from '@angular/core';
import { CommandeDto } from 'src/app/DTOs/CommandeDto';
import { CommandeService } from 'src/app/services/commandesService/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes: CommandeDto[] = [];

  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.commandeService.getToutesLesCommandes().subscribe(data => {
      this.commandes = data;
    });
  }

  getBadgeClass(etat: string): string {
    switch (etat) {
      case 'EnAttente': return 'badge bg-warning text-dark';
      case 'EnCours': return 'badge bg-primary';
      case 'Livree': return 'badge bg-success';
      case 'Annulee': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }
}
