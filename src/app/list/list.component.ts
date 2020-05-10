import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/Services/Auth.service';
import { UserServiceService } from 'src/Services/UserService.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/Services/alertify.service';
import { User } from '../_models/User';
import { Pagination, PaginationResult } from '../_models/Pagination';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   users: User[];
   pagination: Pagination;
   likesParam = 'Likers';

   

  constructor(private authService: AuthServiceService, private userService: UserServiceService,
    private route: ActivatedRoute, private alert : AlertifyService)
    {

    }

  ngOnInit() {
    this.route.data.subscribe( data => {

      this.users = data['users'].result;
      this.pagination = data['users'].pagination;

    });
  }

  pageChanged(event: any): void{
    this.pagination.currentPage = event.page;
   this.loaduser();

  }

  loaduser() {
    
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null,
      this.likesParam)
    .subscribe((res: PaginationResult<User[]>) => {
      this.users = res.result;
      this.pagination = res.pagination;
      
        

    }, error => {
      this.alert.error(error);
    });
  }
}


