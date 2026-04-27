//importing ionic and angular components and header and footer so they can be used on the trending page
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class TrendingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
