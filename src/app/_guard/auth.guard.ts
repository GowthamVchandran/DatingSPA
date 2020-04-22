import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/Services/Auth.service';
import { AlertifyService } from 'src/Services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthServiceService,
  private router: Router,
  private alertify: AlertifyService){

  }

  canActivate(): boolean  {
    if (this.authservice.loggedIn()) {
        return true;
    }

    this.alertify.error('Please login');
    this.router.navigate(['home']);
    return false;
  }
}
