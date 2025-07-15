import { Component, OnInit } from '@angular/core';
import { ProduitDto } from 'src/app/DTOs/ProduitDTO';
import { ProduitService } from 'src/app/services/produitServicesHomeClient/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  produitsVedette: ProduitDto[] = [];

  constructor(private produitsService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitsService.getTousProduits().subscribe({
      next: (res) => {
        // Pour l'instant on prend les 3 premiers comme "vedette"
        this.produitsVedette = res.slice(0, 3);
      },
      error: (err) => console.error('Erreur chargement produits', err)
    });
  }
}
