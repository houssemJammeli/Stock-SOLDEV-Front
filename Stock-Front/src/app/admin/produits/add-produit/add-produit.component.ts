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
  formData.append('Nom', this.produit.nom);
  formData.append('Description', this.produit.description);
  formData.append('QuantiteEnStock', this.produit.quantiteEnStock.toString());
  formData.append('PrixUnitaire', this.produit.prixUnitaire.toString());
  formData.append('Categorie', this.produit.categorie);
  formData.append('FournisseurId', this.produit.fournisseurId.toString());

  if (this.selectedFile) {
    console.log("Image à envoyer :", this.selectedFile);
    formData.append('Image', this.selectedFile, this.selectedFile.name);
  } else {
    console.warn("Aucune image sélectionnée !");
  }

  this.http.post('https://localhost:7041/api/Produits/upload', formData)
    .subscribe({
      next: (res) => {
        console.log('Produit ajouté', res);
        alert("Produit ajouté avec succès !");
      },
      error: (err) => {
  console.error('Erreur complète', err);

  let message = "Erreur inconnue";

  // Si le backend renvoie un objet { message: "..."}
  if (err?.error?.message) {
    message = err.error.message;
  }
  // Sinon, on essaie de lire l'erreur textuelle
  else if (typeof err?.error === 'string') {
    message = err.error;
  }
  // Fallback
  else if (err.message) {
    message = err.message;
  }

  alert("Erreur lors de l'ajout : " + message);
}

    });
}


}