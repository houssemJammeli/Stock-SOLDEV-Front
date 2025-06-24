import { Component, OnInit } from '@angular/core';
import { FournisseurService, Fournisseur } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  fournisseurs: Fournisseur[] = [];

  constructor(private fournisseurService: FournisseurService) {}

  ngOnInit(): void {
    this.getFournisseurs();
  }

  getFournisseurs(): void {
    this.fournisseurService.getFournisseurs().subscribe(data => {
      this.fournisseurs = data;
    });
  }

supprimerFournisseur(id?: number) {
  if (!id) return; // sécurité : ignore si id invalide

  if (confirm("⚠️ Supprimer ce fournisseur ?")) {
    this.fournisseurService.deleteFournisseur(id).subscribe({
      next: () => {
        this.fournisseurs = this.fournisseurs.filter(f => f.id !== id);
        alert("✅ Fournisseur supprimé !");
      },
      error: () => alert("❌ Échec de la suppression.")
    });
  }
}
}