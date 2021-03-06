import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../../../models/recipe/recipe.model'
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
