import { Injectable } from '@angular/core';
import { dhamelhe } from '../dhamelhe';


@Injectable({
  providedIn: 'root'
})
export class PersonalData {
  getProfile(): dhamelhe {
    return new dhamelhe(
      '991777857',
      'Henil Dhameliya',
      'dhamelhe',
      'Davis',
      'Assignment 4 – Angular More'
    );
  }
}