import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: User[];

  constructor(private service: UserServiceService, private alertMsg: AlertifyService,
    private route:ActivatedRoute) { }

  ngOnInit() {
      
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  // loaduser(){
  //   this.service.getUsers().subscribe((users: User[]) => {

  //     this.users = users;
  //     console.log(this.users);

  //   }, error => {
  //     this.alertMsg.error(error);
  //   });
  // }
}
