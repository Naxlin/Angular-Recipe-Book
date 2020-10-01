import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test-recipe", "simply a test", "../../assets/images/recipe.jpg"),
    new Recipe("test-recipe", "simply a test", "../../assets/images/recipe.jpg")
  ];
  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelect(recipe: Recipe) {
    this.selectedRecipeEvent.emit(recipe);
  }
}
