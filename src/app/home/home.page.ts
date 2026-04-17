import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  //testing constructor
  constructor() {
  console.log("constructor is working")

  }

  //testing ngoninit
  ngOnInit(){
    console.log("ngoninit is working")
  }

  //testing ionviewwillenter
  ionViewWillEnter () {
    console.log("ionviewWillEnter is working")
  }
  
  //testing ionviewdidenter
  ionViewDidEnter () {
    console.log("ionViewDidEnter is working")
  }

  //testing ionviewwilleave
  ionViewWillLeave () {
    console.log("ionViewWillLeave is working")
  }

  //testing ionviewdidleaved
  ionViewDidLeave () {
    console.log("ionViewDidLeave is working")
  }
}


