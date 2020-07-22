import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any = {name :'admin@gmail.com', password : 'admin'}
  profileForm:any;
  errorMsg:string;
  uname:string;
  upassword:any;
  constructor(private formBuilder : FormBuilder,
              private router : Router,
              private authService:AuthService
              ) { 
                  this.profileForm = this.formBuilder.group({
                    email : ['', Validators.required],
                    password : ['', Validators.required],
                  });
    }
    
    loginUser(){
      let username=this.profileForm.value.email;
      let  password=this.profileForm.value.password;
      if(username == this.uname && password == this.upassword){
        this.router.navigate(['admin']);
        this.authService.setLoggedIn(true);
      }else{
        return this.errorMsg="Enter Valid Details";
      }
    }
    ngOnInit(): void {
      if (localStorage.length > 0) {
        this.router.navigate(['admin']);
        // storing objects in localstorage
        localStorage.setItem('users', JSON.stringify(this.user))
                  let user = localStorage.getItem('users');
                  this.uname = JSON.parse(user).name;
                  this.upassword = JSON.parse(user).password
      } 
    }
    
}
