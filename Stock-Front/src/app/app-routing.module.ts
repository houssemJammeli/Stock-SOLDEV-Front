import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FournisseursComponent } from './pages/fournisseurs/fournisseurs.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fournisseurs', component: FournisseursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
