import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/app.-constants.class';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!request.headers.has('Content-Type') && !(request.body instanceof FormData)) {
            request = request.clone({
                headers: request.headers.set('Content-Type', 'application/json')
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        return  next.handle(this.addAuthToken(request));
    }

    addAuthToken(request: HttpRequest<any>) {
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + AppConstants.WeatherToken
            }
        })
    }
}