import { EventEmitter } from '@angular/core';

import { Recipe } from '../../models/recipe/recipe.model';
import { Ingredient } from 'src/models/ingredient/ingredient.model';

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Dry Rub Ribs',
      'Memphis Dry Rub Ribs',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('Short Ribs', 2, 'lb'),
        new Ingredient('BBQ Rub', .5, 'cup'),
        new Ingredient('Rosemary', 3, 'Tbsp')
      ]),
    new Recipe(
      'Asian Spring Rolls',
      'Vegetarian Spicy Srping Rolls',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4pqpGcdMJk8Iqp3YkyR3kOeyv5lHf3gPDiOkT5xgZLmnRKzMOQ&s',
      [
        new Ingredient('Rice Wrapper', 8),
        new Ingredient('Thai Basil', 1.5, 'Tbsp'),
        new Ingredient('Lettuce', 1, 'Cup')
      ])
  ];


  //returns a copy of the array of recipes so that it cannot be changed from outside the service as opposed to returning the reference to the array.
  getRecipes() {
    return this.recipes.slice();
  }


}
