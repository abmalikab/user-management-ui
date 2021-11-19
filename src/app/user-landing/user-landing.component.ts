import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model.component';
import {map} from 'rxjs/operators'
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit {

  constructor(private userService: UserDataService) { }
users: User[] = []

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users =users
      console.log(this.users)
    })

  }

}
