import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.css']
})
export class LayoutClientComponent implements OnInit {
  ngOnInit(): void {
    var tabClient = document.getElementsByClassName('client');
    for (var i = 0; i < tabClient.length; i++) {
      tabClient[i].removeAttribute('disabled');
    }

    var tabAdmin = document.getElementsByClassName('admin');
    for (var i = 0; i < tabAdmin.length; i++) {
      tabAdmin[i].setAttribute('disabled', 'disabled');
    }
  }

}
