import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { WebstoreComponent } from './webstore.component';


const routes: Routes = [
    // {
    //     path: 'webstore',
    //     component: WebstoreComponent, // this is the component with the <router-outlet> in the template
    //     children: [
    //       {
    //         path: 'webstore/cadastro', // child route path
    //         component: CadastroComponent, // child route component that the router renders
    //       },
    //       {
    //         path: 'webstore/catalogo',
    //         component: CatalogoComponent, // another child route component that the router renders
    //       },
    //     ],
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebStoreRoutingModule { }
export const routingComponets=[CadastroComponent]