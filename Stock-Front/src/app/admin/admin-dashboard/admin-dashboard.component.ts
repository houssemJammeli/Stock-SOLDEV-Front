import { Component, OnInit } from '@angular/core';
import { AdminDashService } from 'src/app/services/adminDashService/admin-dash.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {

  stats: any;
  ventesRecentes: any[] = [];
  topProduits: any[] = [];

  constructor(private dashboardService: AdminDashService) {}

  ngOnInit(): void {
    this.chargerStats();
    this.chargerVentes();
    this.chargerTopProduits();
  }

  chargerStats() {
  this.dashboardService.getStats().subscribe(res => {
    this.stats = [
      { label: 'Commandes', value: res.commandes, subtitle: 'Total commandes' },
      { label: 'Ventes', value: res.ventes, subtitle: 'Quantité totale vendue' },
      { label: 'Profit', value: res.profit + ' DT', subtitle: 'Estimation brute' },
      { label: 'Revenu', value: res.revenu + ' DT', subtitle: 'Aujourd\'hui' }
    ];
  });
}

  chargerVentes() {
    this.dashboardService.getVentesRecentes().subscribe(res => {
      this.ventesRecentes = res;
    });
  }

  chargerTopProduits() {
    this.dashboardService.getTopProduits().subscribe(res => {
      this.topProduits = res;
    });
  }

}

/*export class AdminDashboardComponent implements OnInit {
  stats = [
    { label: 'Commande', value: 40876, subtitle: 'Depuis hier' },
    { label: 'Vente', value: 38876, subtitle: 'Depuis hier' },
    { label: 'Profit', value: 12876, subtitle: 'Depuis hier' },
    { label: 'Revenu', value: 11086, subtitle: "Aujourd'hui" },
  ];

  ventesRecentes = [
    { date: '02 Jan 2021', client: 'Adam', produit: 'Ordinateur', prix: 67.33 },
    // à remplacer dynamiquement depuis API
  ];

  topProduits = [
    { nom: 'Ordinateur', quantiteVendue: 1107 },
    { nom: 'PC', quantiteVendue: 1167 },
    // ...
  ];

  constructor() {}

  ngOnInit(): void {
    // Tu pourras ici appeler le service Angular pour récupérer les vraies données via API
  }
}*/
