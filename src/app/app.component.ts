import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';
  constructor(private weatherService: WeatherService) {
    setTimeout(() => {
      this.weatherService.getCurrentLocation(36, 59).subscribe((res: any) => console.log(res))
    }, 1000);
  }
}
