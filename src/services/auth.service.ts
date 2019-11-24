import { AuthInfo } from './../models/Login.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    //localStorage.setItem("logged", JSON.stringify(false));
   }
  get logged(){
    return JSON.parse(localStorage.getItem("logged"))
  }
  set auth(auth:AuthInfo){
    localStorage.setItem("auth", JSON.stringify(auth));
    localStorage.setItem("logged", JSON.stringify(true));
  }
  get auth():AuthInfo{
    if(this.logged){
      return JSON.parse(localStorage.getItem("auth")) as AuthInfo;
    }else{
      return {token:'', id: ''};
    }
  }
}
