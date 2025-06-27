import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/client/home/home.component';
import { LayoutClientComponent } from './layout-client/layout-client.component';
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'produits', component: ListProduitsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
