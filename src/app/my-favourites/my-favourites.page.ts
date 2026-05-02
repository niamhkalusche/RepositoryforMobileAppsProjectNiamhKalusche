//importing ionic and angular components and header and footer so they can be used on the favourites page
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MyData } from '../services/my-data';

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class MyFavouritesPage implements OnInit {

  favourites: any;

  constructor(private mds: MyData) { }

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
}

