import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit {

  constructor(private http: HttpClient) { }
 users:any
  ngOnInit(): void {
    let response = this.http.get('http://localhost:8080/allUsers')
    response.subscribe((data) => this.users = data)
    response.subscribe((data)=>console.log(data))
  }

}
