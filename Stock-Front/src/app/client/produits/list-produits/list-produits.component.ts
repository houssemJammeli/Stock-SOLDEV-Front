import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitDto } from 'src/app/DTOs/ProduitDTO';
import { LignePanierDTO, PanierDTO, PanierService } from 'src/app/services/panierServices/panier.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})

export class ListProduitsComponent implements OnInit {
  produits: ProduitDto[] = [];
  panier: LignePanierDTO[] = []; // 🔴 On stocke localement les lignes du panier

  constructor(private http: HttpClient, private service: PanierService) { }

  ngOnInit(): void {
    this.chargerProduits();
    this.chargerPanier(); // 🔴 Charger le panier depuis l’API
  }

  chargerProduits(): void {
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

  chargerPanier(): void {
    this.service.Get().subscribe({
      next: (data: PanierDTO) => {
        this.panier = data.lignes; // 🔴 On garde les lignes actuelles
      },
      error: (err) => {
        console.error('Erreur lors du chargement du panier', err);
      }
    });
  }

  Ajouter(produit: ProduitDto): void {
    const quantiteDemandee = produit.qte;

    if (quantiteDemandee < 1 || isNaN(quantiteDemandee)) {
      alert("Veuillez saisir une quantité valide.");
      return;
    }

    const ligneExistante = this.panier.find(l => l.produitId === produit.id);
    const quantiteDejaDansPanier = ligneExistante ? ligneExistante.quantite : 0;
    const totalSouhaite = quantiteDejaDansPanier + quantiteDemandee;

    if (totalSouhaite > produit.quantiteEnStock) {
      alert(`Stock insuffisant. Déjà dans le panier : ${quantiteDejaDansPanier}, disponible : ${produit.quantiteEnStock}`);
      return;
    }

    const lignePanierDto: LignePanierDTO = {
      produitId: produit.id,
      quantite: quantiteDemandee
    };

    this.service.AjouterProduitAuPanier(lignePanierDto)
      .subscribe({
        next: () => {
          alert('Produit ajouté au panier');
          this.chargerPanier(); // 🔁 Recharge le panier après ajout
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout au panier', err);
        }
      });
  }
}

/*
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
    // Vérifie si la quantité saisie dépasse le stock
    if (produit.qte > produit.quantiteEnStock) {
      alert("La quantité demandée dépasse le stock disponible.");
      return;
    }

    if (produit.qte < 1 || isNaN(produit.qte)) {
      alert("Veuillez saisir une quantité valide.");
      return;
    }

    const lignePanierDto: LignePanierDTO = {
      produitId: produit.id,
      quantite: produit.qte
    };

    this.service.AjouterProduitAuPanier(lignePanierDto)
      .subscribe(() => alert('Produit ajouté au panier'));
  }
}
  */
