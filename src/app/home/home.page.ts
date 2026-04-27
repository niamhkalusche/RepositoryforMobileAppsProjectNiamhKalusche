import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpOptions } from '@capacitor/core';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  standalone: true,
  imports: [IonicModule],
})
export class TrendingPage implements OnInit {

  movies: any;

  constructor(private ms: MovieService) {}

 ngOnInit() {
  this.movies = [];
  this.getTrendingMovies();
}

  /* my get method for getting the trending movies, telling it where to get them from, what time period (day) and giving it my access token so it
  can access it */
  async getTrendingMovies() {
    const options: HttpOptions = {
      url: 'https://api.themoviedb.org/3/trending/movie/day',
      headers: {
        Authorization: 'Bearer YOUR_TMDB_ACCESS_TOKEN'
      }
    };

     const data = await this.ms.get(options);
     this.movies = data.results;   
    console.log(this.movies);
  }
}