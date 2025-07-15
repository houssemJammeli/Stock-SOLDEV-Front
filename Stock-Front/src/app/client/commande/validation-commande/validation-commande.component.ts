import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitDto } from 'src/app/DTOs/ProduitDTO';
import { AuthService } from 'src/app/services/auth.service';
import { CommandeCreateDto, CommandeService, LigneCommandeDto } from 'src/app/services/commandesService/commande.service';
import { PanierService } from 'src/app/services/panierServices/panier.service';
import { Utilisateur, UtilisateurService } from 'src/app/services/utilisateursService/utilisateur.service';

@Component({
  selector: 'app-validation-commande',
  templateUrl: './validation-commande.component.html',
  styleUrls: ['./validation-commande.component.css']
})
export class ValidationCommandeComponent implements OnInit {

  utilisateur: Utilisateur = {
    id: 0,
    nom: '',
    email: '',
    password: '',
    telephone: '',
    adresse: '',
    role: 1
  };

  produitsDansPanier: any[] = [];
  fraisLivraison: number = 0;
  totalPrix: number = 0;

  clientId: number = 0;

  constructor(
    private panierService: PanierService,
    private utilisateurService: UtilisateurService,
    private commandeService: CommandeService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  const id = this.authService.getUserId();
  if (id) {
    this.clientId = id;
    this.utilisateurService.getById(this.clientId).subscribe({
      next: data => this.utilisateur = data
    });
  } else {
    alert('Utilisateur non connecté !');
    this.router.navigate(['/login']);
  }

  this.produitsDansPanier = this.panierService.produitsDansPanierTemp;
  this.fraisLivraison = this.panierService.fraisLivraisonTemporaire;
  this.totalPrix = this.panierService.totalPrixTemporaire;
}

  validerCommande() {
    const lignesCommande: LigneCommandeDto[] = this.produitsDansPanier.map(p => ({
      produitId: p.produit.id,
      quantite: p.quantite
    }));

    const commande: CommandeCreateDto = {
      clientId: this.utilisateur.id,
      total: this.totalPrix + this.fraisLivraison,
      lignes: lignesCommande,
      typeLivraison: this.fraisLivraison === 10 ? 1 : 0
    };

    console.log('Commande envoyée au backend :', commande);

    this.commandeService.creerCommande(commande).subscribe({
      next: () => {
        alert('✅ Commande enregistrée avec succès !');
        // ➕ Vider le panier temporaire :
        this.panierService.produitsDansPanierTemp = [];
        this.panierService.totalPrixTemporaire = 0;
        this.panierService.fraisLivraisonTemporaire = 5;

        this.router.navigate(['/client']);
      },
      error: err => {
        console.error(err);
        alert('❌ Erreur lors de la création de la commande');
      }
    });
  }
}