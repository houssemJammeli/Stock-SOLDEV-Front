import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitDto } from 'src/app/DTOs/ProduitDTO';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  produits: ProduitDto[] = [];

  constructor(private http: HttpClient, private router: Router) { }

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

  modifierProduit(produit: ProduitDto): void {
    this.router.navigate(['/admin/produits/edit', produit.id]);
  }

  supprimerProduit(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.http.delete(`https://localhost:7041/api/Produits/${id}`)
        .subscribe({
          next: () => {
            // Supprimer localement dans le tableau pour mise à jour instantanée
            this.produits = this.produits.filter(p => p.id !== id);
            alert('Produit supprimé avec succès !');
          },
          error: (err) => {
            console.error('Erreur lors de la suppression', err);
            alert("Erreur lors de la suppression du produit.");
          }
        });
    }
  }
}
