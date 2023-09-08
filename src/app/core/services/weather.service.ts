import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'
import { AppConstants } from '@core/constants/app.-constants.class';
import { IWeatherResponse } from '@models/weather/weather-response.interface';
import { IWeatherObject } from '@models/weather/weather-object.interface';

@Injectable({ providedIn: 'root' })
export class WeatherService {

    private _http = inject(HttpClient)

    getCurrentWeather(lat: number, lon: number): Observable<IWeatherObject> {
        return this._http.get<IWeatherResponse>(`${AppConstants.WeatherEndPoint}/weather?lat=${lat}&lon=${lon}&appid=${AppConstants.WeatherToken}&units=standard`).pipe(
            map((res: IWeatherResponse) => {
                return {
                    ...res.sys,
                    wind: {...res.wind},
                    coordinations: {
                        lat: res.coord.lat,
                        long: res.coord.lon
                    },
                    cityName: res.name,
                    weatherType: res.weather[0].main,
                    weatherDesc: res.weather[0].description,
                    temprature: {
                        temp: res.main.temp,
                        tempMax: res.main.temp_max,
                        tempMin: res.main.temp_min,
                        feelsLike: res.main.feels_like
                    }
                } as IWeatherObject
            })
        )
    }
}