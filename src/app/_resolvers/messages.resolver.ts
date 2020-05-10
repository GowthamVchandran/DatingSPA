import { Injectable } from '@angular/core'
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../_models/Message';
import { AuthServiceService } from 'src/Services/Auth.service';

@Injectable()
export class messagesResolver implements Resolve<Message[]> {

    pageNumber = 1; pageSize = 5;  messageContainer = 'Unread';
    constructor(private service: UserServiceService, private router: Router,
        private alert: AlertifyService, private authService: AuthServiceService)
        {

        }

        resolve(route: ActivatedRouteSnapshot): Observable<Message[]>{
            
            return this.service.getMessage(this.authService.UserName.nameid, this.pageNumber,
                 this.pageSize, this.messageContainer ).pipe(
                catchError( error => {
                    this.alert.error('problem with Retrieving messages');
                    this.router.navigate(['/home']);
                    return of(null);
                })
            );
        }
}

