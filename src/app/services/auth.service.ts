import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private paths = {
    TOKEN: 'token',
    ID: 'id',
  };
  get token() {
    return localStorage.getItem(this.paths.TOKEN);
  }
  set token(token: string) {
    localStorage.setItem(this.paths.TOKEN, token);
  }
  set id(id: string) {
    localStorage.setItem(this.paths.ID, id);
  }
  get id() {
    return localStorage.getItem(this.paths.ID);
  }
}
