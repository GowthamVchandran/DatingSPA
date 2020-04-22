import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import {User} from '../_models/User';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

 

  constructor(private alertMsg: AlertifyService) { }

  ngOnInit() {

  }


}
