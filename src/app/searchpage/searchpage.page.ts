//importing ionic and angular components and header and footer so they can be used on the search page
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]
})
export class SearchpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
