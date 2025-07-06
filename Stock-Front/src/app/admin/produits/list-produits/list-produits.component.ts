import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProduitDto } from 'src/app/DTOs/ProduitDTO';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit{

    produits: ProduitDto[] = [];
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.http.get<ProduitDto[]>('https://localhost:7041/api/Produits')
        .subscribe({
          next: (data) => {
            this.produits = data;
          },
          error: (err) => {
            console.error('Erreur lors du chargement des produits', err);
          }
        });
    }

}
