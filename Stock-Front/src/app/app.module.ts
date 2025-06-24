import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FournisseursComponent } from './pages/fournisseurs/fournisseurs.component';
import { AjoutFournisseurComponent } from './fournisseurs/ajout-fournisseur/ajout-fournisseur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifierFournisseurComponent } from './fournisseurs/modifier-fournisseur/modifier-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FournisseursComponent,
    AjoutFournisseurComponent,
    ModifierFournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
