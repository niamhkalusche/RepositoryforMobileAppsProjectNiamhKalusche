//imports for angular and ionic as well as routerlink for my icon buttons
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

//importing my specific icons for the header/toolbar
import { addIcons } from 'ionicons';
import { filmOutline, searchOutline, menuOutline} from 'ionicons/icons';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //adding the icons to the constructor
  constructor() { 
    addIcons({
    filmOutline,
    searchOutline,
    menuOutline
  });
  }

  ngOnInit() { }

}