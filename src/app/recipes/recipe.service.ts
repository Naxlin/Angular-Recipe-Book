import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelector = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("test-recipe", "simply a test", "../../assets/images/recipe.jpg",
               [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]),
    new Recipe("test-recipe2", "simply a test", "../../assets/images/recipe.jpg",
               [new Ingredient("Buns", 2), new Ingredient("Meat", 1)])
  ];
  constructor(private slService:ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngsToSL(ings: Ingredient[]) {
    this.slService.addIngredients(ings);
  }
}
