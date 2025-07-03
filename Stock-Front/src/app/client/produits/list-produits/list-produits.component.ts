import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitDto } from 'src/app/DTOs/ProduitDTO';
import { LignePanierDTO, PanierService } from 'src/app/services/panierServices/panier.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  produits: ProduitDto[] = [];

  constructor(private http: HttpClient, private service: PanierService) { }

  ngOnInit(): void {
    this.http.get<ProduitDto[]>('https://localhost:7041/api/Produits')
      .subscribe({
        next: (data) => {
          this.produits = data;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des produits', err);
        }
      });
  }

  Ajouter(produit: ProduitDto) {
    const lignePanierDto: LignePanierDTO = {
      produitId: produit.id,     // ⚠️ Assure-toi que `produit` a un champ `id`
      quantite: produit.qte                // ou une quantité personnalisée si tu l’as
    };

    this.service.AjouterProduitAuPanier(lignePanierDto)
      .subscribe(() => alert('Produit ajouté au panier'));
  }
}
