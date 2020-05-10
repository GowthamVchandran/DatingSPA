import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/User';
import { TabsetComponent } from 'ngx-bootstrap';
//import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-memberdetail',
  templateUrl: './memberdetail.component.html',
  styleUrls: ['./memberdetail.component.css']
})
export class MemberdetailComponent implements OnInit {

  @ViewChild('memberTabs') memberTabs: TabsetComponent;
  user: User;

  //galleryOptions: NgxGalleryOptions[];
    //galleryImages: NgxGalleryImage[];

  constructor(private userservice: UserServiceService, private alert: AlertifyService,
    private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.data.subscribe( data => {
      this.user = data['user']
    });

    this.route.queryParams.subscribe(params => {

      const selectedTab = params['tab'];

      // this.memberTabs.tabs[selectedTab].active = true;
    });

  }

  getUserDetails(){
    this.userservice.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
        this.user = user;
    }, err => {
      console.log(err);
      this.alert.error(err);
    });
  }

  selectTab(tabId: number){
  this.memberTabs.tabs[tabId].active = true;
  }

}
