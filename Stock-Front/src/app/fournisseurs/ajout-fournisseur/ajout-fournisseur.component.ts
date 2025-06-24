import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FournisseurService, Fournisseur, FournisseurCreateDto } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.css']
})
export class AjoutFournisseurComponent {
  fournisseurForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private fournisseurService: FournisseurService) {
    this.fournisseurForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.fournisseurForm.valid) {
      const fournisseur: FournisseurCreateDto = this.fournisseurForm.value;

      this.fournisseurService.addFournisseur(fournisseur).subscribe({
        next: (res) => {
          this.successMessage = '✅ Fournisseur ajouté avec succès !';
          this.errorMessage = '';
          this.fournisseurForm.reset();
        },
        error: (err) => {
          this.errorMessage = '❌ Erreur lors de l\'ajout du fournisseur.';
          this.successMessage = '';
          console.error(err);
        }
      });
    }
  }
}
