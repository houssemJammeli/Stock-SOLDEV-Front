import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  produit: any = {};
  selectedFile: File | null = null;
  produitId!: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.produitId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get(`https://localhost:7041/api/Produits/${this.produitId}`)
      .subscribe(data => this.produit = data);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('Id', this.produitId.toString());
    formData.append('Nom', this.produit.nom);
    formData.append('Description', this.produit.description);
    formData.append('QuantiteEnStock', this.produit.quantiteEnStock.toString());
    formData.append('PrixUnitaire', this.produit.prixUnitaire.toString());
    formData.append('Categorie', this.produit.categorie);
    formData.append('FournisseurId', this.produit.fournisseurId.toString());

    if (this.selectedFile) {
      formData.append('Image', this.selectedFile, this.selectedFile.name);
    }

    this.http.put(`https://localhost:7041/api/Produits/${this.produitId}`, formData)
      .subscribe({
        next: () => {
          alert("Produit modifié avec succès !");
          this.router.navigate(['/admin']);
        },
        error: (err) => {
          console.error("Erreur HTTP :", err);
          alert("Erreur lors de la modification.");
        }
      });
  }
}
