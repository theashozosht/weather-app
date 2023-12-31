import { Component } from '@angular/core';
import { WeatherService } from '@core/services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';
  constructor(private weatherService: WeatherService) {
    setTimeout(() => {
      this.weatherService.getCurrentWeather(36, 59).subscribe((res: any) => console.log(res))
    }, 1000);
  }
}
