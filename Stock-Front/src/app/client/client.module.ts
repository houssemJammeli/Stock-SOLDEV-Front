import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LayoutClientComponent } from './layout-client/layout-client.component';



@NgModule({
  declarations: [
  
    FooterComponent,
       HeaderComponent,
       HomeComponent,
       LayoutClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
