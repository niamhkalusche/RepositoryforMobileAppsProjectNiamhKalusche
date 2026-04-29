//importing ionic and angular components and header and footer so they can be used on the search page
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../components/footer/footer.component';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { HttpOptions } from '@capacitor/core';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})

export class SearchpagePage implements OnInit, AfterViewInit {
  @ViewChild('searchheader', { read: ElementRef }) searchheader!: ElementRef;

  //movies array and members array (refers to actors and crew members so users can search for both)
 movies: any[] = [];
 members: any[] = [];

  constructor(
    private animationCtrl: AnimationController,
    private ms: MovieService
  ) { }

  ngOnInit() {
  }

  /* animation for getting the header to bounce in from the left, learned from (https://ionicframework.com/docs/utilities/animations), (https://www.w3schools.com/cssref/css_pr_translate.php)
   and https://www.w3schools.com/cssref/playdemo.php?filename=playcss_translate*/
  ngAfterViewInit() {
    const animation = this.animationCtrl.create()
      .addElement(this.searchheader.nativeElement)
      .duration(1000)
      .easing('ease-in-out')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

    animation.play();
  }

  //instantiating query element so it can be used outside of handle input-for the actual database search
  query: any = "";

  /* method learned from https://ionicframework.com/docs/api/searchbar in the ts code for Debounce, assigning the input to the 
  query variable so it can be used by the getmoviesandactors method and calling the getmovies and actors method here so that
  it can use it */
  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    this.query = target.value || '';
    console.log(this.query);

    //calling the trending movie method if a person doesn't submit anything
    if (this.query == '' ){
    this.getTrendingMovies();
    }

    //calling the search method if a person actually puts something into the search bar
    else { 
    this.getMoviesFromSearch();
    this.getPeopleFromSearch();
    }
  }

  /* repeating my gettrending movie method so that it can be used 
  if the user searches nothing */ 
  async getTrendingMovies() {
     const options: HttpOptions = {
       url: 'https://api.themoviedb.org/3/trending/movie/day',
       headers: {
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro'
       }
     };
 
      const data = await this.ms.get(options);
      this.movies = data.results;   
     console.log(this.movies);
   }

  /* get method for getting movies and actors from the database (https://developer.themoviedb.org/reference/search-person), 
     (https://developer.themoviedb.org/reference/search-movie), (https://developer.themoviedb.org/docs/search-and-query-for-details)*/
  async getMoviesFromSearch() {
  let options: HttpOptions = {
    url: 'https://api.themoviedb.org/3/search/movie?query=' + this.query,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro',
    }
  };

  let result = await this.ms.get(options);
   console.log(result);
  this.movies = result.results;

}
async getPeopleFromSearch() {
  let options: HttpOptions = {
    url: 'https://api.themoviedb.org/3/search/person?query=' + this.query,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro',
    }
  };

  let result = await this.ms.get(options);
  this.members = result.results;
}
}