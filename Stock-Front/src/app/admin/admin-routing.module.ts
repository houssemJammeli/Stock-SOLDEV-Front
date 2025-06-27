import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFournisseursComponent } from './fournisseurs/liste-fournisseurs/liste-fournisseurs.component';
import { AjouterFournisseurComponent } from './fournisseurs/ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseurComponent } from '../admin/fournisseurs/modifier-fournisseur/modifier-fournisseur.component';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component'
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { AddProduitComponent } from './produits/add-produit/add-produit.component'


const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent, 
    children: [
      { path: 'fournisseurs', component: ListeFournisseursComponent },
      { path: 'fournisseurs/ajouter', component: AjouterFournisseurComponent },
      { path: 'fournisseurs/modifier/:id', component: ModifierFournisseurComponent },
      { path: 'produits/add', component: AddProduitComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
