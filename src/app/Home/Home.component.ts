import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  RegisterMode = false;
  values: any;
  private baseUrl = environment.ApiURL; 

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getclientRequest();
  }

  getclientRequest(){

    this.http.get(this.baseUrl + 'Values/GetTest').subscribe(res => {
      this.values = res;
    }, err => {
      console.log(err);
    });
  }
  Register(){
    this.RegisterMode = true;
  }

  RegisterCancel(value: boolean){
    this.RegisterMode = value;
  }

}
