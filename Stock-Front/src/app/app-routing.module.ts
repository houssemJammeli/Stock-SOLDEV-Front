import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FournisseursComponent } from './pages/fournisseurs/fournisseurs.component';
import { AjoutFournisseurComponent } from './fournisseurs/ajout-fournisseur/ajout-fournisseur.component';
import { ModifierFournisseurComponent } from './fournisseurs/modifier-fournisseur/modifier-fournisseur.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fournisseurs', component: FournisseursComponent },
  { path: 'ajouter-fournisseur', component: AjoutFournisseurComponent },
  { path: 'modifier-fournisseur/:id', component: ModifierFournisseurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
