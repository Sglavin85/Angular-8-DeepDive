import { Component, OnInit, Input} from '@angular/core';

import { Recipe } from '../../../../../models/recipe/recipe.model'
import { RecipesService } from 'src/app/services/recipes.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }


}
