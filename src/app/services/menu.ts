import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodItem } from '../types';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private http: HttpClient) {}

  getBreakfast(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>('assets/data/breakfast.json');
  }
  getLunch(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>('assets/data/lunch.json');
  }
  getDinner(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>('assets/data/dinner.json');
  }
}
