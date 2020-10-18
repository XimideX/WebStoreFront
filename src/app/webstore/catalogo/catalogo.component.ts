import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/models/Product.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {

  public product: Product;
  public listProduct: Array<Product>;
  
  
  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}
  
  ngOnInit(): void {
    // if (this.cookieService.get('Ximid.Cookie') == "")
    // {
    //   this.router.navigate(['home']);
    // } 
    this.product= new Product();
    this.listProduct = new Array<Product>();
    this.product.name="";
    this.product.value = null;
    this.product.codigo = "";
    this.product.description = "";
    this.product.quantity =null;
    this.listProduct.push(this.product);
    this.getData();
    
  }
  
    
  getData(){
    
    let url="https://localhost:5001/Product/SelectAll";

    this.http.get(url).toPromise().then((data: Array<Product>) => {
    
      console.log(data);
      this.product = new Product();
      // this.listProduct = new Array<Product>();
      this.listProduct.pop();

      for (let i=0; i < data.length; i++){
        this.product = new Product();
        console.log(data[i]);
        this.product.name = data[i].name;
        this.product.value = data[i].value;
        this.product.codigo = data[i].codigo;
        this.product.description = data[i].description;
        this.product.quantity = data[i].quantity;
        this.listProduct.push(this.product);
      }
    
      
    //  console.log(JSON.stringify(data.json.name))
     // this.result=JSON.stringify(data.json.name)
    })
  }


}
