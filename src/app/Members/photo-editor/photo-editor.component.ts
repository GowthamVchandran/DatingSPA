import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { photos } from 'src/app/_models/Photo';
import { FileUploader } from 'ng2-file-upload';
import { AuthServiceService } from 'src/Services/Auth.service';
import { UserServiceService } from 'src/Services/UserService.service';
import { AlertifyService } from 'src/Services/alertify.service';



@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})


export class PhotoEditorComponent implements OnInit {

  @Input() photos: photos[];
  @Output() getMainPhotoChange = new EventEmitter<string>();

  baseurl: 'http://localhost:5000/api/';

  uploader: FileUploader;
  hasBaseDropZoneOver: false;
  response: string;
  currentMain : photos;

  constructor(private authservie: AuthServiceService, private userService: UserServiceService , private alert: AlertifyService ) {
  }
  ngOnInit() {
    console.log('photo-editor' + this.photos[0].id);
    this.FileInitialize();
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  FileInitialize() {
    this.uploader = new FileUploader({
      url: 'http://localhost:5000/api/' + 'users/' + this.authservie.UserName.nameid + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType:['image'],
      removeAfterUpload : true,
      autoUpload : false,
      maxFileSize : 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };

    this.uploader.onSuccessItem = (item, response, status, headers) => {

      if(response){
        const res: photos = JSON.parse(response);

        const photo = {
          id :  res.id,
          url : res.url,
          dateAdded : res.dateAdded,
          description : res.description,
          isMain : res.isMain
        };
        this.photos.push(photo);
      }

    };
  }

  SetMainPhoto(photo: photos){
    this.userService.setMainPhoto(this.authservie.UserName.nameid, photo.id).subscribe( () => {
      this.currentMain = this.photos.filter(p => p.isMain === true)[0];
      this.currentMain.isMain = false;
      photo.isMain = true;
      this.authservie.changeMemberPhoto(photo.url);
      this.authservie.CurrentUser.photoURL = photo.url;
      localStorage.setItem('user', JSON.stringify(this.authservie.CurrentUser));
    }, (err) => {
      this.alert.error(err);
    });
  }

  DeletePhote(id: number) {
    this.alert.confirm('Are you sure want to delete',() => {
      this.userService.DeletePhoto(this.authservie.UserName.nameid,id).subscribe(
        () => {this.photos.splice( this.photos.findIndex(x => x.id === id), 1);
        this.alert.success('Successfully deleted');
        }, err => {
          this.alert.error('fail to delete');
        });
      });
    }
 
}
