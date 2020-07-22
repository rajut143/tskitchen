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
  profileForm:any;
  errorMsg:string;
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
      if(username == 'a' && password == 'a'){
        this.router.navigate(['admin']);
        this.authService.setLoggedIn(true);
      }else{
        return this.errorMsg="Enter Valid Details";
      }
    }
    ngOnInit(): void {
      if (localStorage.length > 0) {
        this.router.navigate(['admin']);
      } 
    }

}
