//importing ionic and angular components and header and footer so they can be used on the search page
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../components/footer/footer.component';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class SearchpagePage implements OnInit, AfterViewInit {
@ViewChild('searchheader', { read: ElementRef }) searchheader!: ElementRef;

  constructor(
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
  }

     /* animation for getting the header to bounce in from the left, learned from (https://ionicframework.com/docs/utilities/animations), (https://www.w3schools.com/cssref/css_pr_translate.php)
   and https://www.w3schools.com/cssref/playdemo.php?filename=playcss_translate*/
   ngAfterViewInit() {
  const animation = this.animationCtrl.create()
    .addElement(this.searchheader.nativeElement)
    .duration(1000)
    .easing('ease-in-out')
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

  animation.play();

}

//method for handling the search
handleInput(event: Event) {
  const target = event.target as HTMLIonSearchbarElement;
  const query = target.value || '';

  console.log(query);
}

}
