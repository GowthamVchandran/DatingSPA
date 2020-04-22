import { Injectable } from '@angular/core'
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class memberdetailResolver implements Resolve<User> {

    constructor(private service: UserServiceService, private router: Router,
        private alert: AlertifyService)
        {

        }

        resolve(route: ActivatedRouteSnapshot):Observable<User>{
            return this.service.getUser(route.params['id']).pipe(
                catchError( error => {
                    this.alert.error('problem with nagivation');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );
        }

}

