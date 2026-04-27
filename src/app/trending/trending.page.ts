import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class TrendingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
