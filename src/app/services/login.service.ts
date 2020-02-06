
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BACKEND_URL, ENDPOINTS } from '../../proxy.conf';
import { sha256 } from 'js-sha256';
import { Observable, empty } from 'rxjs';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient, private toastr: ToastrService, private auth: AuthService, private router: Router) {}
  login (username: string, password: string) {
    return this.http.post(BACKEND_URL + ENDPOINTS.LOGIN, {
      username, password: sha256(password)
    }).pipe(
      tap((response: {id: string, token: string}) => {
        this.auth.id = response.id;
        this.auth.token = response.token;
      }),
      tap(response => {
        if(response.id && response.token) {
          this.router.navigate(["/administration"])
        }
      }),
      catchError((error: HttpErrorResponse) => this.processErrorResponse(error))
    )
  }
  processErrorResponse(error: HttpErrorResponse): Observable<any> {
    switch(error.status) {
      case 404:
        this.toastr.error("User not found", "Error")
        break;
      case 401:
        this.toastr.error("Bad password", "Error")
    }
    return empty();
  }
}

