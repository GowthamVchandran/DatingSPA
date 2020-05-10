import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/User';
import { AuthServiceService } from 'src/Services/Auth.service';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

 @Input() users: User;

  constructor(private authServie: AuthServiceService, private userService: UserServiceService,
  private alert : AlertifyService ) {

    

  }

  sendLike(id: number)
  {
    this.userService.sendLike(this.authServie.UserName.nameid, id).subscribe( data =>
      {
        this.alert.success('you have liked:' + this.users.knownAs);
      }, err => {
        this.alert.error(err);
      });
  }

  ngOnInit() {
  }

}
