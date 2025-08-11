import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

import { PersonalData } from './services/personal-data';
import { MenuService } from './services/menu';
import { dhamelhe } from './dhamelhe';
import { FoodItem } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  profile!: dhamelhe;
  breakfast: FoodItem[] = [];
  lunch: FoodItem[] = [];
  dinner: FoodItem[] = [];

  constructor(private personal: PersonalData, private menu: MenuService) {}

  ngOnInit(): void {
    this.profile = this.personal.getProfile();
    forkJoin({
      b: this.menu.getBreakfast(),
      l: this.menu.getLunch(),
      d: this.menu.getDinner()
    }).subscribe(({ b, l, d }) => {
      this.breakfast = b; this.lunch = l; this.dinner = d;
    });
  }
}
