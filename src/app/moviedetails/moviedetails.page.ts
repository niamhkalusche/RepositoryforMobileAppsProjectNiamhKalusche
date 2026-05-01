import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie';
import { HttpOptions } from '@capacitor/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class MoviedetailsPage implements OnInit {

  moviedetails: any;
  movieId: any;
 cast: any = [];
crew: any = [];

  constructor(
     private ms: MovieService,
     private myActivatedRoute: ActivatedRoute,
     private myrouter: Router
  ) { }

  ngOnInit(){ 
  this.movieId = this.myActivatedRoute.snapshot.paramMap.get('id');
  this.getSearchedMovieDetails();
   this.getMovieCredits();
  }

  async getSearchedMovieDetails() {
       const options: HttpOptions = {
         url: 'https://api.themoviedb.org/3/movie/' + this.movieId,
         headers: {
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro'
         }
       };
   
        const data = await this.ms.get(options);
        this.moviedetails = data;  
       console.log(this.moviedetails);
     }

     async getMovieCredits() {

  const options: HttpOptions = {
    url: 'https://api.themoviedb.org/3/movie/' + this.movieId + '/credits',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro'
    }
  };

  const data = await this.ms.get(options);

  this.cast = data.cast;
  this.crew = data.crew;

  console.log(this.cast);
  console.log(this.crew);
}

openSearchedPerson (id: number) {
  console.log("Clicked person ID", id);
  this.myrouter.navigate(['/persondetails', id])
}

  }

