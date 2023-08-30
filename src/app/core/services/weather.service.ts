import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from '@core/constants/app.-constants.class';

@Injectable({ providedIn: 'root' })
export class WeatherService {

    private _http = inject(HttpClient)

    getCurrentLocation(cityName: string): Observable<any> {
        return this._http.get(`${AppConstants.WeatherEndPoint}/current.json?key=${AppConstants.WeatherToken}&q=${cityName}&aqi=yes`)
    }
}