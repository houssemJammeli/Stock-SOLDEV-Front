import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LayoutClientComponent } from './layout-client/layout-client.component';
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';
import { PanierComponent } from './paniers/panier/panier.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    FooterComponent,
       HeaderComponent,
       HomeComponent,
       LayoutClientComponent,
       ListProduitsComponent,
       PanierComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
