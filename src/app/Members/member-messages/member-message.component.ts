import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/_models/Message';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { AuthServiceService } from 'src/Services/Auth.service';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-member-message',
  templateUrl: './member-message.component.html',
  styleUrls: ['./member-message.component.css']
})
export class MemberMessageComponent implements OnInit {

  @Input() recipientId: number;
  messages: Message[];

  newMessage: any = {};

  constructor(private service: UserServiceService, private alertMsg: AlertifyService,
    private authService: AuthServiceService ) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    const currentUserid = +this.authService.UserName.nameid;

   this.service.getMessageThread(this.authService.UserName.nameid, this.recipientId).pipe(
     tap(message => {
      for(let i=0;i< message.length; i++) {
        if(message[i].isRead === false && message[i].recipientId === currentUserid){
            this.service.MarkMessageAsRead(currentUserid, message[i].id);
        }
      }
    }))
   .subscribe( messages => {
      this.messages = messages;
   }, err => {
     this.alertMsg.error(err);
   }); 
  }

  sendMessage(){    
    this.newMessage.recipientId = this.recipientId;
    this.service.sendMessage(this.authService.UserName.nameid, this.newMessage)
      .subscribe( (message: Message) => {
        this.messages.unshift(message);
        this.newMessage.content = '';

      },err =>{
        console.log(err);
        this.alertMsg.error(err);
      });

  }

}
