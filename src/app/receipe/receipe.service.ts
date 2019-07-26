import { Injectable, EventEmitter } from '@angular/core';

import { Receipe } from './receipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ReceipeService {
  receipeSelected = new EventEmitter<Receipe>();

  private receipes: Receipe[] = [
    new Receipe(
      'First Receipe', 
      'Good Receipe', 
      'https://media.istockphoto.com/photos/delhi-biryani5-picture-id519486575?k=6&m=519486575&s=612x612&w=0&h=pRFXIUG71hOe0yQ1BDIKreVtFum5G4t-CEnix3Q22SU=', 
      [
        new Ingredient ('Chicken', 1),
        new Ingredient ('Rice', 1000)
      ]),
    new Receipe(
      'Second Receipe', 
      'Good Receipe', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kRg2Hzdjjb820GeWHvIOFLn7-ItdJnOG5NhwE2b-KHpWdPre8Q', 
      [
        new Ingredient ('Mutton', 1),
        new Ingredient ('Rice', 1000)
      ])
  ];

  constructor() { }

  getReceipes() {
    return this.receipes.slice();
  }

}