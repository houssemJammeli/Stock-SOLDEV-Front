import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panierServices/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor ( private service: PanierService){}

  panierCount: number = 0;

    ngOnInit() {
    this.chargerPanier();
  }

  chargerPanier() {
    this.service.Get().subscribe(panier => {
      this.panierCount = panier.lignes.length;
    });
  }

}
