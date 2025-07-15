import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/client/home/home.component';
import { LayoutClientComponent } from './layout-client/layout-client.component';
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';
import { PanierComponent } from './paniers/panier/panier.component';
import { ValidationCommandeComponent } from './commande/validation-commande/validation-commande.component';
import { HistoriqueCommandesComponent } from './commande/historique-commandes/historique-commandes.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'produits', component: ListProduitsComponent },
      { path: 'panier', component: PanierComponent },
      { path: 'validation', component: ValidationCommandeComponent },
      { path: 'historique', component: HistoriqueCommandesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
