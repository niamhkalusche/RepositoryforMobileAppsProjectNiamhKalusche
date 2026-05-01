import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovieService } from '../services/movie';
import { HttpOptions } from '@capacitor/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.page.html',
  styleUrls: ['./persondetails.page.scss'],
  standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})

export class persondetailsPage implements OnInit {

  persondetails: any;
  personId: any;
  personmoviecredits: any;
  persontvcredits: any;

  constructor(
     private ms: MovieService,
     private myActivatedRoute: ActivatedRoute,
     private myrouter: Router
  ) { }

  ngOnInit(){ 
  this.personId = this.myActivatedRoute.snapshot.paramMap.get('id');
  this.getCastCrewDetails();
   this.getPersonMovieCredits();
   this.getPersonTVCredits();
  }

  async getCastCrewDetails() {
       const options: HttpOptions = {
           url: 'https://api.themoviedb.org/3/person/' + this.personId,
         headers: {
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro'
         }
       };
   
        const data = await this.ms.get(options);
        this.persondetails = data;  
       console.log(this.persondetails);
     }

     async getPersonMovieCredits() {

  const options: HttpOptions = {
   url: 'https://api.themoviedb.org/3/person/' + this.personId + '/movie_credits',
      headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro',
    }
  };

  const data = await this.ms.get(options);

 this.personmoviecredits = data.cast;
console.log(this.personmoviecredits);

}

async getPersonTVCredits() {

  const options: HttpOptions = {
      url: 'https://api.themoviedb.org/3/person/' + this.personId + '/tv_credits',
      headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro',
    }
  };

  const data = await this.ms.get(options);
this.persontvcredits = data.cast;
console.log(this.persontvcredits);
}

openSearchedMovie(id: number){
  console.log("Clicked movie ID:", id);
   this.myrouter.navigate(['/moviedetails', id]);
}
  }

