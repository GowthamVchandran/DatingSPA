import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_models/User';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 UserName: any;
 CurrentUser: User;
 photoUrl = new BehaviorSubject<string>('../../assets/user.png');
 currentPhotoUrl = this.photoUrl.asObservable();
 
 jwtHelper = new JwtHelperService();

private baseUrl = environment.ApiURL + 'auth/';

constructor(private client: HttpClient){
}

changeMemberPhoto(photoUrl: string) {
  this.photoUrl.next(photoUrl);
}

login(model: any){

  return this.client.post(this.baseUrl + 'login', model).pipe(
    map( (response: any) => {
       const user = response;
       console.log();
       if (user) {
        this.storeUserDetail_In_localStorage(user);
        this.changeMemberPhoto(this.CurrentUser.photoURL);
       }
    })
  );
  
}

storeUserDetail_In_localStorage(current: any): void {

  localStorage.setItem('token', current.token);
  localStorage.setItem('user', JSON.stringify(current.user));
  this.UserName = this.jwtHelper.decodeToken(current.token);
  this.CurrentUser = current.user;

}

Register(model : User){
  return this.client.post(this.baseUrl+'Register', model);
}

loggedIn() {
  var token = localStorage.getItem('token');
   return !this.jwtHelper.isTokenExpired(token);
}
}
