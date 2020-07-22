import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedStatus = JSON.parse(localStorage.getItem('loggedin') || 'false')
  constructor() { }
  setLoggedIn(value : boolean){
    this.loggedStatus = value;
    localStorage.setItem('loggedin', 'true')
  }
  isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedin' || this.loggedStatus.toString()));
  }
}
