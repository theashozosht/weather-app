import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICityData } from '@models/city/city-data.interface';
import { Observable, mergeMap, map } from 'rxjs';
import { WeatherService } from '@services/weather.service';
import { IWeatherResponse } from '@models/weather/weather-response.interface';
import { IWeatherObject } from '@models/weather/weather-object.interface';

@Injectable({
    providedIn: 'root'
})
export class CityService {
    constructor(
        private _http: HttpClient,
        private _weatherService: WeatherService
    ) { }

    getCityData(cityName: string): Observable<IWeatherObject> {
        return this._http.get<ICityData[]>('https://api.api-ninjas.com/v1/city?name=' + cityName).pipe(
            mergeMap((res: ICityData[]) =>
                this._weatherService.getCurrentWeather(res[0].latitude, res[0].longitude)
            ));
    }
}