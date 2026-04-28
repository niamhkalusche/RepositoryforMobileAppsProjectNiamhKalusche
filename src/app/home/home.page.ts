import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpOptions } from '@capacitor/core';
import { MovieService } from '../services/movie';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-trending',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [IonicModule, HeaderComponent, FooterComponent ],
})
export class HomePage implements OnInit {

constructor() {}

 ngOnInit() {

}

 
}