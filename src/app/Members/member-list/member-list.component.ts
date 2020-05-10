import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginationResult} from '../../_models/Pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: User[];

  user: User = JSON.parse(localStorage.getItem('user'));

  // display gender into dropdown

  genderList = [{value: 'male', display: 'Males'}, {value: 'female', display: 'Females'}];

  userParams: any = {};

  pagination : Pagination; 

  constructor(private service: UserServiceService, private alertMsg: AlertifyService,
    private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(data => {

      this.users = data['users'].result;


      this.pagination = data['users'].pagination;


    });

    this.userParams.gender = this.user.gender === 'male'? 'female': 'male';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.userParams.orderBy = 'lastActive';
  }

  reset(){

    this.userParams.gender = this.user.gender === 'male'? 'female': 'male';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.loaduser();
  }

  pageChanged(event: any): void{
    this.pagination.currentPage = event.page;

   this.loaduser();

  }

  loaduser() {
    this.service.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
    .subscribe((res: PaginationResult<User[]>) => {
      this.users = res.result;
      this.pagination = res.pagination;


    }, error => {
      this.alertMsg.error(error);
    });
  }
}
