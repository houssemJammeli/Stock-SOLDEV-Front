import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {

  produitsMenuOpen = false;
  fournisseursMenuOpen = false;

  toggleProduitsMenu() {
    this.produitsMenuOpen = !this.produitsMenuOpen;
  }
  toggleFournisseursMenu() {
    this.fournisseursMenuOpen = !this.fournisseursMenuOpen;
  }


  ngOnInit(): void {
    var tabClient = document.getElementsByClassName('client');
    for (var i = 0; i < tabClient.length; i++) {
      tabClient[i].setAttribute('disabled', 'disabled');
    }

    var tabAdmin = document.getElementsByClassName('admin');
    for (var i = 0; i < tabAdmin.length; i++) {
      tabAdmin[i].removeAttribute('disabled');
    }
  }

}
