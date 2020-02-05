import { Injectable } from "@angular/core";
import { BACKEND_URL, ENDPOINTS } from '../../proxy.conf';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable, empty } from 'rxjs';
import { Config } from '../entities/Config.model';


@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    constructor(private http: HttpClient, private toastr: ToastrService){

    }
    getConfig (): Observable<Config> {
        const url = BACKEND_URL + ENDPOINTS.CONFIG;
        return this.http.get(url)
            .pipe(
                tap(console.log),
                catchError(error => this.processError(error, 'config'))
            )
    }
    processError (error: {status: number}, message: string): Observable<void> {
      switch (error.status) {
        case 0:
          this.toastr.error('Error while loading: ' + message, 'Unknow error')
          return empty()
      }
    }
}
