import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FoodItem } from '../types';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NgFor, MatTabsModule, MatCardModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() breakfast: FoodItem[] = [];
  @Input() lunch: FoodItem[] = [];
  @Input() dinner: FoodItem[] = [];
}
