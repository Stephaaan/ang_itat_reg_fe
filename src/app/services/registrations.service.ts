import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BACKEND_URL, ENDPOINTS } from '../../proxy.conf';
import { empty, Observable } from 'rxjs';
import { FormData as FD} from '../entities/FormData.model';
@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {
  constructor(private http: HttpClient, private auth: AuthService, private toastr: ToastrService) {

  }
  register(data: FD) {
    return this.http.post(BACKEND_URL + ENDPOINTS.REGISTER, data).pipe(
      catchError(error => this.processErrorResponse(error))
    )
  }
  deleteRegistration(id: string){
    return this.http.post(BACKEND_URL + "administration/delete", {id: this.auth.id, token: this.auth.token, idToDel: id})
      .pipe(
        catchError(err => this.processErrorResponse(err))
      )
  }
  getAllRegistrations():Observable<FormData[]> {
    return this.http.post<FormData[]>(BACKEND_URL + ENDPOINTS.GET_REGISTRATIONS, {id: this.auth.id, token: this.auth.token})
      .pipe(catchError((error: HttpErrorResponse) => this.processErrorResponse(error)))
  }
  processErrorResponse(error: HttpErrorResponse) {
    switch(error.status) {
      case 400:
        this.toastr.error("Something went wrong", "Bad request")
        break;
      case 401:
        this.toastr.error("try to logout and login back", "Unauthorized")
        break;
      default:
        this.toastr.error("Something went wrong", "Internal error")
    }
    return empty()
  }
}
