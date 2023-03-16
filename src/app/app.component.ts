import { Component } from '@angular/core';
import { ChartData, LineData } from './chartData';
import { MovieService } from '../app/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .then((res: any) => {
        this.movieService.movies = res.results;
        // console.log(this.movieService.movies);
        this.movieService.movies.map((item) => {
          let obj: any = {
            label: item.original_title,
            value: item.vote_count,
          };

          // console.log(obj);

          this.chartData_2D_1.lineData.push(obj);
          console.log(this.chartData_2D_1.lineData);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  title = 'angular-d3';

  chartData_2D_1: ChartData = {
    yrange: 10000,
    lineData: [
      // { label: 'Vue', value: 166443 },
      // { label: 'React', value: 150793 },
      // { label: 'Angular', value: 62342 },
      // { label: 'Backbone', value: 27647 },
      // { label: 'Ember', value: 21471 },
    ],
  };

  chartData_2D_2: ChartData = {
    yrange: 1,
    lineData: [
      // { label: 'CSharp', value: 0.33 },
      // { label: 'JavaScript', value: 0.67 },
      // { label: 'TypeScript', value: 0.4 },
      // { label: 'Java', value: 0.25 },
    ],
  };

  viewMovie(movieId: number) {
    // this.router.navigate(['/movie',movieId ])
  }
}
