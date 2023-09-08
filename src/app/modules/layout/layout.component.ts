import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WeatherService } from '@core/services/weather.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, debounceTime, map, mergeMap, of, switchMap } from 'rxjs';
import { CityService } from '@core/services/city.service';
import { IWeatherObject } from '@models/weather/weather-object.interface';

@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
})
export class DashboardLayoutComponent {
  private _cityService: CityService = inject(CityService);
  private _cityServiceData$!: Observable<any>;
  private _weatherSubject$: Subject<IWeatherObject> = new BehaviorSubject({} as IWeatherObject)
  public weatherArray: Array<IWeatherObject> = [];
  cityName = new FormControl<string>('');

  constructor() {
    this.cityName.valueChanges.pipe(
      debounceTime(500),
      mergeMap((res: any) => {
        if (!!res)
          return this._cityService.getCityData(res)
        else
          return of(null)
      })
    ).subscribe((res: IWeatherObject | null) => this._weatherSubject$.next(<IWeatherObject>res));
    this._weatherSubject$.subscribe((res: IWeatherObject) => {
      if (!!res) {
        this.weatherArray.push(res);
      }
    })
  }

  sendToAPIXU(...arg: any) {
  }
}
