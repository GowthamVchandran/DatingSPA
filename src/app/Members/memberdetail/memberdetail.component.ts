import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/User';
//import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-memberdetail',
  templateUrl: './memberdetail.component.html',
  styleUrls: ['./memberdetail.component.css']
})
export class MemberdetailComponent implements OnInit {

  user: User;

  //galleryOptions: NgxGalleryOptions[];
    //galleryImages: NgxGalleryImage[];

  constructor(private userservice: UserServiceService, private alert: AlertifyService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    console.log("call detail component");
    this.route.data.subscribe( data => {
      this.user = data['user']
    });

  }

  getUserDetails(){
    this.userservice.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
        this.user = user;
        console.log(this.user);

    }, err => {

      this.alert.error(err);

    });

  }

}
