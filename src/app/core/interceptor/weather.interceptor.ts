import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '@core/constants/app.-constants.class';

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
            setHeaders: {
                Accept: "application/json; charset=utf-8"
            }
        });
        return request.url.startsWith('https://api.api-ninjas.com/v1/') ? next.handle(this.addAuthToken(request)) : next.handle(request)
    }

    addAuthToken(request: HttpRequest<any>) {
        return request.clone({
            setHeaders: {
                'X-Api-Key': AppConstants.CityToken,
            }
        })
    }
}