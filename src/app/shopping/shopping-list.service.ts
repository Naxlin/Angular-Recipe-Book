import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ings: Ingredient[]) {
    // this.ingredients.array.forEach(ing => {
    //   this.ingredients.push(ing);
    // });
    this.ingredients.push(...ings);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
