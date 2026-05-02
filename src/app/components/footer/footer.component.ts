//importing ionic, angular components, oninit and routerlink so i can use routerlink with my icons
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import {
  homeOutline,
  searchOutline,
  heartOutline,
  trendingUpOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
   imports: [IonicModule, RouterLink],
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent  implements OnInit {

  constructor() {
     addIcons({
      homeOutline,
      searchOutline,
      heartOutline,
      trendingUpOutline
    });
  }
   
  ngOnInit() {}

  }

