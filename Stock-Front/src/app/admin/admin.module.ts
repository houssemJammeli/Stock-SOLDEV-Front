import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListeFournisseursComponent } from './fournisseurs/liste-fournisseurs/liste-fournisseurs.component';
import { AjouterFournisseurComponent } from './fournisseurs/ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseurComponent } from './fournisseurs/modifier-fournisseur/modifier-fournisseur.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddProduitComponent } from './produits/add-produit/add-produit.component';

import { FormsModule } from '@angular/forms';
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';
import { EditProduitComponent } from './produits/edit-produit/edit-produit.component';
import { ListeUtilisateursComponent } from './utilisateurs/liste-utilisateurs/liste-utilisateurs.component';
import { ModifierUtilisateurComponent } from './utilisateurs/modifier-utilisateur/modifier-utilisateur.component';


@NgModule({
  declarations: [
    ListeFournisseursComponent,
    AjouterFournisseurComponent,
    ModifierFournisseurComponent,
    AdminDashboardComponent,
    LayoutAdminComponent,
    AddProduitComponent,
    ListProduitsComponent,
    EditProduitComponent,
    ListeUtilisateursComponent,
    ModifierUtilisateurComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ]
})
export class AdminModule { }
