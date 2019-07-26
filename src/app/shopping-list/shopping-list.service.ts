import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Appls', 5),
    new Ingredient('Tomatoes', 10)
  ]

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredinet(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  IngredientsAddedToList(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.ingredientChanged.emit(this.ingredients.slice())
  }
}