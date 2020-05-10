import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/Services/Auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/User';

@Component({
  selector: 'app-root',
  templateUrl: './Values.component.html',
  styleUrls: ['./Values.component.css']
})
export class ValuesComponent implements OnInit {

  Value: any;

  jwtHelper = new JwtHelperService();
  constructor(private service: AuthServiceService ) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));

if(token){
this.service.UserName = this.jwtHelper.decodeToken(token);
 }

 if(user){
  this.service.CurrentUser = user;
  this.service.changeMemberPhoto(user.photoURL);
 }

}

 

}
