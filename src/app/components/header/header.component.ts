//imports for angular and ionic 
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

//importing my specific icons for the header/toolbar
import { addIcons } from 'ionicons';
import { filmOutline, searchOutline, menuOutline} from 'ionicons/icons';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule],
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