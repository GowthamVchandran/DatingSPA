import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/User';
import { AlertifyService } from 'src/Services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserServiceService } from 'src/Services/UserService.service';
import { AuthServiceService } from 'src/Services/Auth.service';


@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editform') editForm: NgForm;

  photoUrl: string;

  @HostListener('window:beforeunload', ['$event'])

  unloadNotification($event: any) {
    if(this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  user: User;

  constructor(private route: ActivatedRoute, private alert: AlertifyService,
    private servive: UserServiceService, private authServie: AuthServiceService ) { }

  ngOnInit() {    
    this.route.data.subscribe( data => {
      this.user = data['user'];
    });
    
    this.authServie.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }


  updateUser()
  {
    this.servive.updateUser(this.authServie.UserName.nameid, this.user).subscribe(
      next => {
        this.alert.success('successfully saved');
        this.editForm.reset(this.user);
      }, err => {
        console.log(this.user);
        this.alert.error(err);
      }
    );
  }

  updateMain(Url){
    console.log(Url);
   this.user.photoURL= Url;
  }
}
