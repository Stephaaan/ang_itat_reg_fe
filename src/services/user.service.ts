import { AuthService } from './auth.service';
import { AuthInfo, LoginState } from './../models/Login.model';
import { API_ADDRESS } from './../proxy';
import { Injectable } from '@angular/core';
import { sha256 } from 'js-sha256';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

interface LoginResponse{
  message?: string;
  token?: string,
  id?: string
}
@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  urls = {
    login: 'administration/login'
  }

  constructor(private http: HttpClient, private auth: AuthService) { }
  login(username, password){
    return this.http.post<LoginResponse>(API_ADDRESS + this.urls.login, {username, password:sha256(password)})
      .pipe(
        map(response => {
          if(response.message){
            return response.message;
          }
          this.auth.auth = response as AuthInfo;
          return LoginState.LOGIN_OK
        })
      )
  }
}
