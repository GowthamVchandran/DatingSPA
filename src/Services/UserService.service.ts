import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/User';
import { PaginationResult } from 'src/app/_models/Pagination';
import { map } from 'rxjs/operators';
import { Message } from 'src/app/_models/Message';

// const httpOptions = {
//  headers : new HttpHeaders({
//    'Authorization': 'Bearer ' + localStorage.getItem('token')
//  })
// };

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl = environment.ApiURL;

constructor(private http: HttpClient) { }

getUsers(page?, itemPerPage?, userParams?, likesParam?): Observable<PaginationResult<User[]>>{

  const paginatedResult: PaginationResult<User[]> = new PaginationResult<User[]>();

  let params = new HttpParams();
 
  if(page != null && itemPerPage != null){
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemPerPage);
  }

  if(userParams != null)
  {
    params = params.append('minAge', userParams.minAge);
    params = params.append('maxAge', userParams.maxAge);
    params = params.append('gender', userParams.gender);
    params = params.append('orderBy', userParams.orderBy);
  }

  

  if(likesParam === 'Likers')
  {
    params = params.append('Likers', 'true');
  }

  if(likesParam === 'Likees')
  {
    params = params.append('Likees', 'true');
  }

  return this.http.get<User[]>(this.baseUrl + 'Users/GetUsers', {observe: 'response', params})
    .pipe( map( res => {
      paginatedResult.result = res.body;
      if(res.headers.get('Pagination') != null) {
        paginatedResult.pagination = JSON.parse(res.headers.get('Pagination'))
      }
      return paginatedResult;
    })
  );
}

updateUser(id: number, user: User){

  return this.http.put<User>(this.baseUrl + 'Users/updateUser?id=' + id, user);
}


getUser(id): Observable<User>{

  return this.http.get<User>(this.baseUrl + 'Users/getUserbyID/' + id);
}

DeletePhoto(userId: number, id: number)
{
 return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id );
}

setMainPhoto(userId: number, id: number) 
{
  return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain',{});
}

sendLike(id: number, recipentId: number) 
{
  return this.http.post(this.baseUrl + 'users/LikeUser/' + id + '/like/' + recipentId,{});
}

getMessage(id: number, page?, itemPerPage?, messageContainer?)
{
  
  const paginatedResult: PaginationResult<Message[]> = new PaginationResult<Message[]>();

  let params = new HttpParams();

  params = params.append('messageContainer', messageContainer);

  if(page != null && itemPerPage != null){
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemPerPage);
  }

  return this.http.get<Message[]>(this.baseUrl + 'users/' + id + '/message',{ observe:'response' , params })
   .pipe( map( res => {
     paginatedResult.result = res.body;

     if(res.headers.get('Pagination') != null){
      paginatedResult.pagination = JSON.parse(res.headers.get('Pagination'));
     }
     return paginatedResult;
   })
   );
}

getMessageThread(id: number,recipientId: number){

  return this.http.get<Message[]>(this.baseUrl + 'users/' + id + '/Message/threads/' + recipientId);
}

sendMessage(id: number, message: Message){
  return this.http.post(this.baseUrl + 'users/' + id + '/Message', message);
}

deleteMessage(id: number, userId: number){
  return this.http.post(this.baseUrl + 'users/' + userId + '/Message/' + id,{});

}

MarkMessageAsRead(userId: number, messageId: number){
  return this.http.post(this.baseUrl + 'users/' + userId + '/Message/' + messageId + '/read',{})
  .subscribe();
}

}
