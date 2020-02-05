import { Injectable } from "@angular/core";
import { BACKEND_URL, ENDPOINTS } from '../../proxy.conf';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    constructor(private http: HttpClient){

    }
    getConfig () {
        const url = BACKEND_URL + ENDPOINTS.CONFIG;
        return this.http.get(url)
            .pipe(
                tap(console.log)
            )
    }
}
