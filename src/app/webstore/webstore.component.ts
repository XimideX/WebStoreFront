import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-webstore',
  templateUrl: './webstore.component.html',
  styleUrls: ['./webstore.component.css']
})
export class WebstoreComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  public logOut(): void {
    let url = "https://localhost:5001/Usuario/Logout";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };

    this.http.get(url, httpOptions).toPromise().then((data: any) => {
      this.cookieService.deleteAll();
      console.log(data);
    })
  }

}
