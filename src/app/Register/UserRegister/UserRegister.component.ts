import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/Services/Auth.service';
import { AlertifyService } from 'src/Services/alertify.service';



@Component({
  selector: 'app-UserRegister',
  templateUrl: './UserRegister.component.html',
  styleUrls: ['./UserRegister.component.css']
})
export class UserRegisterComponent implements OnInit {

  //@Input() ValuesfromHome: any;

  @Output() CancelRegister = new EventEmitter();

  model: any = {};

  constructor( private service: AuthServiceService, private alertify: AlertifyService ) { }

  ngOnInit() {
  }
  Register() {
    this.service.Register(this.model).subscribe( res => {
      this.alertify.success('Register Successfullty');
    }, err => {
      console.log(err);
      this.alertify.error(err);
    });
  }

  Cancel() {
    this.CancelRegister.emit(false);
  }
}
