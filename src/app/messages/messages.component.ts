import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { Message } from '../_models/Message';
import { Pagination, PaginationResult } from '../_models/Pagination';
import { AuthServiceService } from 'src/Services/Auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

 messages: Message[] = [];
 trainers: any;
 pagination: Pagination;
 messageContainer = 'Unread';

  constructor(private alertMsg: AlertifyService , private userService: UserServiceService,
    private authservice: AuthServiceService, private route: ActivatedRoute) {

    }

  ngOnInit() {
    console.log( 'start messages ');

    this.route.data.subscribe(data => {
      this.messages = data['messages'].result;
      console.log("messages.. ");
      this.pagination = data['messages'].pagination;
  });
}

loadMessages() {

  console.log('Test loadMessage');

  this.userService.getMessage(this.authservice.UserName.nameid, this.pagination.currentPage,
    this.pagination.itemsPerPage, this.messageContainer)
  .subscribe((res: PaginationResult<Message[]>) => {
    this.messages = res.result;
    this.pagination = res.pagination;
  }, error => {
    this.alertMsg.error(error);
  });
}

pageChanged(event: any): void {
 this.pagination.currentPage = event.page;
 this.loadMessages();
}

deleteMessage(id: number){
  this.alertMsg.confirm('Are you sure you want to delete this message',() =>{
    this.userService.deleteMessage(id, this.authservice.UserName.nameid).subscribe( ()=>{
      this.messages.splice(this.messages.findIndex(x=>x.id == id),1);
      this.alertMsg.success('successfully delete');
    }, err => {
      this.alertMsg.error('Fail to delete');
    })
  });
}

}
