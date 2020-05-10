import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/Services/Auth.service';
import { AlertifyService } from 'src/Services/alertify.service';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/_models/User';
import { Router } from '@angular/router';



@Component({
  selector: 'app-UserRegister',
  templateUrl: './UserRegister.component.html',
  styleUrls: ['./UserRegister.component.css']
})
export class UserRegisterComponent implements OnInit {

  
  registerForm: FormGroup;

  @Output() CancelRegister = new EventEmitter();

  user: User;

  constructor( private service: AuthServiceService, private alertify: AlertifyService, private route: Router,
  private fb: FormBuilder ) { }

  ngOnInit() {
   this.CreateRegister();
  }


  passwordMatch(g: FormGroup){
  
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }

  CreateRegister(){

    this.registerForm = this.fb.group({
     gender: ['male'],
     userName: ['', Validators.required],
      knownAs: ['', Validators.required],
      DOB : [null, Validators.required],
      city : ['', Validators.required],
      country : ['', Validators.required],
     password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(9)]],
     confirmPassword : ['', Validators.required]
    }, {validator: this.passwordMatch});

  }


  Register() {
    if (this.registerForm.valid)
    {
      this.user = Object.assign({}, this.registerForm.value);
      this.service.Register(this.user).subscribe( () => {
        this.alertify.success("Register Successfully");
      }, err =>
      { 
        this.alertify.error(err);
      }, () => {
        this.service.login(this.user).subscribe(() => {
          this.route.navigate(['/member']);
        });
      });
    }
  }

  Cancel() {
    this.CancelRegister.emit(false);
  }
}
