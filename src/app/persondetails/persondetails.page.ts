import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovieService } from '../services/movie';
import { HttpOptions } from '@capacitor/core';
import { ActivatedRoute } from '@angular/router';
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
  personcredits: any;
  cast: any;
  crew: any;

  constructor(
     private ms: MovieService,
     private myActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){ 
  this.personId = this.myActivatedRoute.snapshot.paramMap.get('id');
  this.getCastCrewDetails();
   this.getCastCrewCredits();
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

     async getCastCrewCredits() {

  const options: HttpOptions = {
 url: 'https://api.themoviedb.org/3/person/' + this.personId + '/movie_credits',
      headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro',
    }
  };

  const data = await this.ms.get(options);

  this.cast = data.cast;
  this.crew = data.crew;

  console.log(this.cast);
  console.log(this.crew);
}
  }

