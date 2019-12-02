import { EventEmitter } from '@angular/core';

import {Ingredient} from '../../models/ingredient/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 1),
    new Ingredient('Oregano', 2, 'tsp')
  ];

  getShoppingList() {
    return [...this.ingredients];
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient)
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
