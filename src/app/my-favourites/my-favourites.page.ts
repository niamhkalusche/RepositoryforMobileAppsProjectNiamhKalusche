//importing ionic and angular components and header and footer so they can be used on the favourites page
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MyData } from '../services/my-data';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.page.html',
  standalone: true,
  styleUrls: ['./my-favourites.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class MyFavouritesPage implements OnInit {

  favourites: any;

  constructor(
    private mds: MyData,
    private myrouter: Router
  ) { 
    addIcons({
       trashOutline
    });
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.favourites = await this.mds.get("favourites");
  }

  //method for deleting items from an array-using this method (https://ionicacademy.com/storing-data-inside-ionic-apps/)
  async deleteFromFavourites(movie: any) {
    let result = await this.mds.get("favourites");

    if (result) {
      var index = result.findIndex((m: any) => m.id == movie.id);

      result.splice(index, 1);

      await this.mds.set("favourites", result);
      this.favourites = result;
    }
  }

  openMovie(id: number) {
  this.myrouter.navigate(['/moviedetails', id]);
}

   refreshFavouritesPage () {
    this.myrouter.navigate(['/favourites']);
   }
}

