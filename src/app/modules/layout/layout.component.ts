import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WeatherService } from '@core/services/weather.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardConstants } from '@constants/dashboard-constants.class';
import { IDashboardGrid } from '@models/dashboard/grid.interface';

@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [NgFor, MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule],
})
export class DashboardLayoutComponent {
  private _weatherService: WeatherService = inject(WeatherService)
  public gridList: Array<IDashboardGrid> = DashboardConstants.tiles
}
