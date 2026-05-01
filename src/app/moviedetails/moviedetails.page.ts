import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { HttpOptions } from '@capacitor/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoviedetailsPage implements OnInit {

  moviedetails: any;
  movieId: any;

  constructor(
     private ms: MovieService,
     private myActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){ 
  this.movieId = this.myActivatedRoute.snapshot.paramMap.get('id');
  this.getSearchedMovieDetails();
  }

  async getSearchedMovieDetails() {
       const options: HttpOptions = {
         url: 'https://api.themoviedb.org/3/movie/{movie_id}',
         headers: {
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro'
         }
       };
   
        const data = await this.ms.get(options);
        this.moviedetails = data.results;   
       console.log(this.moviedetails);
     }
  }

