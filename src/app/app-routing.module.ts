import { CatalogoComponent } from './webstore/catalogo/catalogo.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './webstore/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { WebstoreComponent } from './webstore/webstore.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'webstore',
  component: WebstoreComponent, // this is the component with the <router-outlet> in the template
  children: [
    {
      path: 'cadastro', // child route path
      component: CadastroComponent, // child route component that the router renders
    },
    {
      path: 'catalogo',
      component: CatalogoComponent, // another child route component that the router renders
    }
  ]
},
{path: 'webstore', component:WebstoreComponent},
{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets=[HomeComponent, CadastroComponent, CatalogoComponent]
