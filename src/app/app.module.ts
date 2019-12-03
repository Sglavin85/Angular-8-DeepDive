import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipe-book/recipes/recipes.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list/shopping-list.component';
import { RecipeItemComponent } from './components/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list/shopping-list-edit/shopping-list-edit.component';

import { ShoppingListService } from './services/shopping-list.service';

import { DropdownDirective } from './directives/dropdown-directive/dropdown.directive';
import { AppRouting } from './app-routing.module';
import { RecipeStartComponent } from './components/recipe-book/recipe-start/recipe-start.component';
import { RecipeAddedComponent } from './components/recipe-book/recipe-added/recipe-added.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeAddedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
