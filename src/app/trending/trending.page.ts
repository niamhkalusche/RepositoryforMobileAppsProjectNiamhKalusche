//importing ionic and angular components and header and footer so they can be used on the trending page
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HttpOptions } from '@capacitor/core';
import { MovieService } from '../services/movie';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class TrendingPage implements OnInit, AfterViewInit {
 @ViewChild('trendingheader', { read: ElementRef }) trendingheader!: ElementRef;
 movies: any;
 
   constructor(
    private ms: MovieService,
    private animationCtrl: AnimationController,
    private myrouter: Router
   ) {}
 
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
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro'
       }
     };
 
      const data = await this.ms.get(options);
      this.movies = data.results;   
     console.log(this.movies);
   }

   /* animation for getting the header to bounce in from the left, learned from (https://ionicframework.com/docs/utilities/animations), (https://www.w3schools.com/cssref/css_pr_translate.php)
   and https://www.w3schools.com/cssref/playdemo.php?filename=playcss_translate*/

   ngAfterViewInit() {
  const animation = this.animationCtrl.create()
    .addElement(this.trendingheader.nativeElement)
    .duration(1000)
    .easing('ease-in-out')
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

  animation.play();
}

openSearchedMovie(id: number){
  console.log("Clicked movie ID:", id);
   this.myrouter.navigate(['/moviedetails', id]);
}

 }
