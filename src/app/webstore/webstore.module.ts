import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routingComponets, AppRoutingModule } from '../app-routing.module';
import { WebstoreComponent } from './webstore.component';



@NgModule({
  declarations: [
    WebstoreComponent,
    routingComponets,
    WebstoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [WebstoreComponent]
})
export class WebstoreModule { }
