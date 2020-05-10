
import {Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { MemberListComponent } from './Members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './_guard/auth.guard';
import { MemberdetailComponent } from './Members/memberdetail/memberdetail.component';
import { memberdetailResolver } from './_resolvers/member-detail-resolver';
import { memberlistResolver } from './_resolvers/member-list-resolver';
import { MemberEditComponent } from './Members/member-edit/member-edit.component';
import { membereditResolver } from './_resolvers/member-edit-resolver';
import { preventUnsavedChanges } from './_guard/prevent-unsaved-changes-guard';
import { listResolver } from './_resolvers/list-resolver';
import { messagesResolver } from './_resolvers/messages.resolver';


export const Approute: Routes = [

{ path: '', component: HomeComponent},

{
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:
    [
        { path: 'member', component: MemberListComponent, resolve: {users: memberlistResolver  } },
        { path: 'member/:id', component: MemberdetailComponent, resolve: { user: memberdetailResolver  } },
        { path: 'memberedit', component: MemberEditComponent,
        resolve: { user: membereditResolver  } , canDeactivate: [preventUnsavedChanges] },
        { path: 'message', component: MessagesComponent, resolve : { messages : messagesResolver} },
        { path: 'list', component: ListComponent, resolve : { users : listResolver}}
    ]
},

{ path: '**', redirectTo: '', pathMatch: 'full'}

]