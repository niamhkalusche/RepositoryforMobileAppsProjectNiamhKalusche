/* this is the service for getting information from the movie from the movie database, using http and get request 
learned from lecture 10 and https://capacitorjs.com/docs/apis/http */
import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {}

//setting up my generic get request so I can use it for searching, trending movies, movie details from themoviedb
  async get(options: HttpOptions) {
    const response: HttpResponse = await CapacitorHttp.get(options);
    return response.data;
  }

  //method for getting me the trending movies from the database
  async getTrendingMovies() {
     //giving my method the link to find the information I want- trending movies by time period day and giving it my access token so it can access it
    const options: HttpOptions = {
      url: 'https://api.themoviedb.org/3/trending/movie/day',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro'
      }
    };

    const data = await this.get(options);
    return data.results;
  }
}
