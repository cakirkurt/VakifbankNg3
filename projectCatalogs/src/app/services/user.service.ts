import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router) { }
  isLoggedIn:boolean;
  returnUrl:string;

  validateUser(name:string, password:string){
    if (name == "user" && password == "pass") {
      this.isLoggedIn = true;
      if (this.returnUrl != undefined) {
         this.router.navigate([this.returnUrl]);
      }
    }
  }

  logOut(){
    this.isLoggedIn = false;
  }

}
