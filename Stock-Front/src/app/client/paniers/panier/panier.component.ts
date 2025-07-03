import { Component, OnInit } from '@angular/core';
import { LignePanierDTO, PanierDTO, PanierService } from 'src/app/services/panierServices/panier.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier?: PanierDTO;

  constructor(private service: PanierService) {}

  ngOnInit() {
    this.chargerPanier();
  }

  chargerPanier() {
    this.service.Get().subscribe(panier => {
      this.panier = panier;
    });
  }

  ajouterProduit(ligne: LignePanierDTO) {
    this.service.AjouterProduitAuPanier(ligne)
      .subscribe(() => this.chargerPanier());
  }

  supprimerProduit(ligne: LignePanierDTO) {
    this.service.SupprimerProduitAuPanier(ligne)
      .subscribe(() => this.chargerPanier());
  }


 /* validerCommande() {
    this.commandeService.validerPanier(this.clientId)
      .subscribe(() => {
        alert('Commande validée !');
        this.chargerPanier();
      });
  }*/
 
}
