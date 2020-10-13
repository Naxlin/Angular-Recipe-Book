import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelector = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("test-recipe", "simply a test", "../../assets/images/recipe.jpg"),
    new Recipe("test-recipe", "simply a test", "../../assets/images/recipe.jpg")
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
  
  

}
