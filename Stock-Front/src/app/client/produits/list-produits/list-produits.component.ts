import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  produits: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://localhost:7041/api/Produits')
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
