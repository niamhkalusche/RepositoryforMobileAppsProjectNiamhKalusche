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

  movies: any[] = [];

  constructor(
    private animationCtrl: AnimationController,
    private ms: MovieService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const animation = this.animationCtrl.create()
      .addElement(this.searchheader.nativeElement)
      .duration(1000)
      .easing('ease-in-out')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

    animation.play();
  }

  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value || '';

    console.log(query);
  }

  async getMoviesAndActors() {
    let options: HttpOptions = {
      url: 'https://api.themoviedb.org/3/search/movie?query=toy story',
      headers: {
        Authorization: 'Bearer YOUR_TOKEN_HERE'
      }
    };

    let result = await this.ms.get(options);
    this.movies = result.results;
  }
}