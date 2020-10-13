import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario;
  }

  public teste(): void {
    console.log("estou aqui");
  }

  public registerUser(): void {

    let url = "https://localhost:5001/Usuario/Login";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };

    this.http.post(url, {
      // newUsername: this.name,
      // newPassword: this.password,
      name: this.name,
      password: this.password,
    }, httpOptions).toPromise().then((data: any) => {

      console.log(data);
      // this.usuario.name = data[0].name;
      // this.usuario.password = data[0].value;
      if (data != null)
      {
        this.router.navigate(['webstore']);
      }

      //pegando os valores do banco de dados  
      //console.log(JSON.stringify(data.json.name))
      //this.result=JSON.stringify(data.json.name)
    })

  }

}
