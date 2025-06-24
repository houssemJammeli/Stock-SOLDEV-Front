import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  FournisseurService,
  Fournisseur,
  FournisseurUpdateDto
} from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-modifier-fournisseur',
  templateUrl: './modifier-fournisseur.component.html',
  styleUrls: ['./modifier-fournisseur.component.css']
})
export class ModifierFournisseurComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  error = '';
  success = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private srv: FournisseurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.form = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required]
    });

    // Pré-remplir le formulaire
    this.srv.getFournisseurs().subscribe(list => {
      const f = list.find(x => x.id === this.id);
      if (f) this.form.patchValue(f);
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const dto: FournisseurUpdateDto = this.form.value;
    this.srv.updateFournisseur(this.id, dto).subscribe({
      next: () => {
        this.success = '✅ Modifié !';
        this.router.navigate(['/fournisseurs']); // retour à la liste
      },
      error: () => (this.error = '❌ Échec de la mise à jour')
    });
  }
}
