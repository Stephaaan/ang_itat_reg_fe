import { AuthInfo } from './../models/Login.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  set auth(auth:AuthInfo){
    localStorage.setItem("auth", JSON.stringify(auth));
  }
  get auth():AuthInfo{
    return JSON.parse(localStorage.getItem("auth")) as AuthInfo;
  }
}
