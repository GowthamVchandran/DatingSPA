import { Injectable } from '@angular/core'
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthServiceService } from 'src/Services/Auth.service';

@Injectable()
export class membereditResolver implements Resolve<User> {

    constructor(private service: UserServiceService, private router: Router,
        private alert: AlertifyService, private authservice: AuthServiceService)
        {

        }

        resolve(route: ActivatedRouteSnapshot): Observable<User>{
            return this.service.getUser(this.authservice.UserName.nameid).pipe(
                catchError( error => {
                    this.alert.error('problem with your data');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );
        }

}

