import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user-model.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }


  getAllUsers() : Observable<User[]> {

 return  this.http.get<User[]>('http://localhost:8080/allUsers').pipe(
   map((users:User[]) => {
     return users.map(user => ({
       firstName: user.firstName,
       lastName: user.lastName,
       age:user.age,
       email:user.email,
       gender:user.gender,
       phoneNumber:user.phoneNumber
     }))
   })
 )
    
  }


}
