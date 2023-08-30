import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from '../constants/app.-constants.class';

@Injectable({ providedIn: 'root' })
export class WeatherService {

    private _http = inject(HttpClient)

    getCurrentLocation(lat: number, lon: number): Observable<any> {
        return this._http.get(`${AppConstants.WeatherEndPoint}?lat=${lat}&lon=${lon}&appid=${AppConstants.WeatherToken}&units=standard`)
    }
}