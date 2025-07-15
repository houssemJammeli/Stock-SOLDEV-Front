import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFournisseursComponent } from './fournisseurs/liste-fournisseurs/liste-fournisseurs.component';
import { AjouterFournisseurComponent } from './fournisseurs/ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseurComponent } from '../admin/fournisseurs/modifier-fournisseur/modifier-fournisseur.component';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component'
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { AddProduitComponent } from './produits/add-produit/add-produit.component'
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';
import { EditProduitComponent } from './produits/edit-produit/edit-produit.component';
import { ListeUtilisateursComponent } from './utilisateurs/liste-utilisateurs/liste-utilisateurs.component';
import { ModifierUtilisateurComponent } from './utilisateurs/modifier-utilisateur/modifier-utilisateur.component';
import { CommandesComponent } from './commandes/commandes/commandes.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent, 
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'fournisseurs', component: ListeFournisseursComponent },
      { path: 'fournisseurs/ajouter', component: AjouterFournisseurComponent },
      { path: 'fournisseurs/modifier/:id', component: ModifierFournisseurComponent },
      { path: 'produits/add', component: AddProduitComponent },
      { path: 'produits', component: ListProduitsComponent },
      { path: 'produits/edit/:id', component: EditProduitComponent },
      { path: 'utilisateurs', component: ListeUtilisateursComponent },
      { path: 'utilisateurs/edit/:id', component: ModifierUtilisateurComponent },
      { path: 'commandes', component: CommandesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
