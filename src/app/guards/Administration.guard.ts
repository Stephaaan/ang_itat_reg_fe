import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of, empty } from 'rxjs';
import { BACKEND_URL, ENDPOINTS } from '../../proxy.conf';
import { map, catchError } from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AdministrationGuard implements CanActivate {
  constructor(private auth: AuthService, private http: HttpClient, private toastr: ToastrService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if(!this.auth.id || !this.auth.token){
      this.router.navigate(["/administration/login"])
      this.toastr.error('Please Log in', "Unauthorized")
      return of(false);
    }
    return this.http.post(BACKEND_URL + ENDPOINTS.IS_AUTHENTICATED, {id: this.auth.id, token: this.auth.token})
      .pipe(
        map(() => true),
        catchError(() => {
          this.auth.id = "";
          this.auth.token  = "";
          this.toastr.error('Please Log in', "Unauthorized")
          this.router.navigate(["/administration/login"])
          return empty()
        })
      )


  }
}
