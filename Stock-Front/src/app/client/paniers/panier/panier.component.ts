import { Component, OnInit } from '@angular/core';
import { ProduitDto } from 'src/app/DTOs/ProduitDTO';
import { LignePanierDTO, PanierDTO, PanierService } from 'src/app/services/panierServices/panier.service';
import { ProduitService } from 'src/app/services/produitServicesHomeClient/produit.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier?: PanierDTO;

  constructor(private service: PanierService, private serviceProduits: ProduitService) { }

  fraisLivraison: number = 5;
  produitsDispo: ProduitDto[] = [];

  ngOnInit() {
    this.serviceProduits.getTousProduits().subscribe(produits => {
      this.produitsDispo = produits;
      this.chargerPanier();
    });
  }

  produitsDansPanier: {
    produit: ProduitDto,
    quantite: number
  }[] = [];

  chargerPanier() {
    this.service.Get().subscribe(panier => {
      this.panier = panier;
      this.produitsDansPanier = panier.lignes.map(ligne => {
        const produit = this.produitsDispo.find(p => p.id === ligne.produitId)!;
        return {
          produit: produit,
          quantite: ligne.quantite
        };
      });
      this.recalculerTotal();
    });
  }

  /*
  ngOnInit() {
    this.chargerPanier();
  }
  */

  /*
  chargerPanier() {
    this.service.Get().subscribe(panier => {
      this.panier = panier;
    });
  }
  */

  modifierQuantite(item: { produit: ProduitDto, quantite: number }, delta: number) {
    const nouvelleQuantite = item.quantite + delta;

    // Empêcher les quantités inférieures à 1
    if (nouvelleQuantite < 1) return;

    // Vérifier si on dépasse le stock
    if (nouvelleQuantite > item.produit.quantiteEnStock) {
      alert("La quantité demandée dépasse le stock disponible.");
      return;
    }

    const ligne: LignePanierDTO = {
      produitId: item.produit.id,
      quantite: delta // on envoie seulement la différence
    };

    this.ajouterProduit(ligne);
  }

  supprimer(item: { produit: ProduitDto, quantite: number }) {
    const ligne: LignePanierDTO = {
      produitId: item.produit.id,
      quantite: item.quantite
    };

    this.supprimerProduit(ligne);
  }

  totalPrix: number = 0;

  recalculerTotal() {
    this.totalPrix = this.produitsDansPanier
      .reduce((total, item) => total + item.produit.prixUnitaire * item.quantite, 0);
  }

  ajouterProduit(ligne: LignePanierDTO) {
    this.service.AjouterProduitAuPanier(ligne)
      .subscribe(() => this.chargerPanier());
  }

  supprimerProduit(ligne: LignePanierDTO) {
    this.service.SupprimerProduitAuPanier(ligne)
      .subscribe(() => this.chargerPanier());
  }

  preparerValidation() {
  this.service.totalPrixTemporaire = this.totalPrix;
  this.service.fraisLivraisonTemporaire = this.fraisLivraison;
  this.service.produitsDansPanierTemp = this.produitsDansPanier;
}

  /*
  validerCommande() {
  // Tu peux adapter selon ton DTO Commande
  const commande = {
    clientId: this.idClient, // ou selon ton auth
    lignes: this.panier.lignes
  };

  this.commandeService.creerCommande(commande).subscribe({
    next: () => {
      alert("Commande validée !");
      this.service.vider(); // si tu veux vider le panier
      this.router.navigate(['/confirmation']);
    },
    error: () => alert("Erreur lors de la validation.")
  });
}
  */


  /* validerCommande() {
     this.commandeService.validerPanier(this.clientId)
       .subscribe(() => {
         alert('Commande validée !');
         this.chargerPanier();
       });
   }*/

}
