import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/models/Usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name: string;
  public password: string;
  private usuario: Usuario;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.usuario = new Usuario;
    if (this.cookieService.get('Ximid.Cookie') != "")
    {
      this.router.navigate(['webstore']);
    }
  }

  public registerUser(): void {

    let url = "https://localhost:5001/Usuario/Register";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      }),
      withCredentials: true
    };

    this.http.post(url, {
      name: this.usuario.name,
      password: this.usuario.password,
    }, httpOptions).toPromise().then((data: any) => {
      if (this.cookieService.get('Ximid.Cookie') != "")
      {
        this.router.navigate(['webstore']);
      }
    })

  }

  public login(): void {

    let url = "https://localhost:5001/Usuario/Login";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // Authorization: 'my-auth-token'
      }),
      observe: 'response' as 'response',
      withCredentials: true
      
    };

    this.http.post(url, {
      name: this.name,
      password: this.password
    }, httpOptions).subscribe(data => {
      if (this.cookieService.get('Ximid.Cookie') != "")
      {
        this.router.navigate(['webstore']);
        // this.cookieService.set('AuthCookie', this.cookieValue);
      }
      // if (data != null){}
    });

  }

}
