import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpOptions } from '@capacitor/core';
import { MovieService } from '../services/movie';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-trending',
  templateUrl: './home.page.html',
   styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, FooterComponent, CommonModule ],
})
export class HomePage implements OnInit, AfterViewInit {
@ViewChild('homeheader', { read: ElementRef }) homeheader!: ElementRef;

trendingmovies: any[] = [];

constructor(
  private animationCtrl: AnimationController,
  private ms: MovieService,
) {
}

 ngOnInit() {
 this.getTrendingMovies();
}

ngAfterViewInit() {
    const animation = this.animationCtrl.create()
      .addElement(this.homeheader.nativeElement)
      .duration(1000)
      .easing('ease-in-out')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

    animation.play();

  }
 
   async getTrendingMovies() {
     const options: HttpOptions = {
       url: 'https://api.themoviedb.org/3/trending/movie/day',
       headers: {
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmU3MzQwZTUzZDcxOWY3ZTBmNWZmNmIyMmViYmI2NiIsIm5iZiI6MTc3NzI5OTI2NC43MjYsInN1YiI6IjY5ZWY2ZjQwMDlkZWE4NDY1ZGQ0OTcxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkBBt4VijAoQ-PXGUdr5FmRiuNswtSIK8XTcETi2Ro'
       }
     };
 
      const data = await this.ms.get(options);
      this.trendingmovies = data.results;   
     console.log(this.trendingmovies);
   }
}