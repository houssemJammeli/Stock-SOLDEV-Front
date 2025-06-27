import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
  produit: any = {
    nom: '',
    description: '',
    quantiteEnStock: 0,
    prixUnitaire: 0,
    categorie: '',
    fournisseurId: 0
  };

  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    for (const key in this.produit) {
      formData.append(key, this.produit[key].toString());
    }

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.http.post('https://localhost:7041/api/Produits/upload', formData)
      .subscribe({
        next: (res) => {
          console.log('Produit ajouté', res);
          alert("Produit ajouté avec succès !");
        },
        error: (err) => {
          console.error('Erreur', err);
          alert("Erreur lors de l'ajout");
        }
      });
  }
}