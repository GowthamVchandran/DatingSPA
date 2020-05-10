import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA    } from '@angular/core';

import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ValuesComponent } from './Values/Values.component';
import { NavComponent } from './nav/nav.component';
import { AuthServiceService } from '../Services/Auth.service';
import { UserRegisterComponent } from './Register/UserRegister/UserRegister.component';
import { HomeComponent } from './Home/Home.component';
import {  ErrorInterceptor } from 'src/Services/error.Interceptor';
import { Approute } from './Route';
import { MemberListComponent } from './Members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberCardComponent } from './Members/member-list/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberdetailComponent } from './Members/memberdetail/memberdetail.component';
import { UserServiceService } from 'src/Services/UserService.service';
import { AuthGuard } from './_guard/auth.guard';
import { memberdetailResolver } from './_resolvers/member-detail-resolver';
import { memberlistResolver } from './_resolvers/member-list-resolver';
import { MemberEditComponent } from './Members/member-edit/member-edit.component';
import { membereditResolver } from './_resolvers/member-edit-resolver';
import { preventUnsavedChanges } from './_guard/prevent-unsaved-changes-guard';
import { PhotoEditorComponent } from './Members/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { listResolver } from './_resolvers/list-resolver';
import { messagesResolver } from './_resolvers/messages.resolver';
import { ListComponent } from './list/list.component';
import { MemberTestComponent } from './Members/member-test/member-test.component';
import { MemberMessageComponent } from './Members/member-messages/member-message.component';

//import {TimeAgoPipe} from 'time-ago-pipe';
//import { NgxGalleryModule } from 'ngx-gallery';

export function tokenGetter(){
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ValuesComponent,
      NavComponent,
      UserRegisterComponent,
      HomeComponent,
      MemberListComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberdetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      ListComponent,
      MemberMessageComponent
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
   imports: [
      BrowserModule,
      TabsModule.forRoot(),
      PaginationModule.forRoot(),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
  //    NgxGalleryModule,
       FileUploadModule,
      BsDropdownModule.forRoot(),
       ButtonsModule.forRoot(),
      RouterModule.forRoot(Approute),
      JwtModule.forRoot({
         config : {
            tokenGetter: tokenGetter,
            whitelistedDomains :['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: ErrorInterceptor,
         multi: true,
       },
       AuthServiceService,
       ErrorInterceptor,
       UserServiceService,
       AuthGuard,
       memberdetailResolver,
       memberlistResolver,
       membereditResolver,
       preventUnsavedChanges,
       listResolver,
       messagesResolver
   ],
   bootstrap: [
      ValuesComponent
   ]

})
export class AppModule { }
