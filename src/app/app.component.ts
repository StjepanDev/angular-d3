import { Component } from '@angular/core';
import { ChartData } from './chartData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-d3';

  chartData_2D_1: ChartData = {
    yrange: 200000,
    lineData: [
      { label: 'Vue', value: 166443 },
      { label: 'React', value: 150793 },
      { label: 'Angular', value: 62342 },
      { label: 'Backbone', value: 27647 },
      { label: 'Ember', value: 21471 },
    ],
  };

  chartData_2D_2: ChartData = {
    yrange: 1,
    lineData: [
      { label: 'CSharp', value: 0.33 },
      { label: 'JavaScript', value: 0.67 },
      { label: 'TypeScript', value: 0.4 },
      { label: 'Java', value: 0.25 },
    ],
  };
}
