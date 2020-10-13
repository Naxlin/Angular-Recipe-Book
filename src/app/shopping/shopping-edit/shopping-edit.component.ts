import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) name: ElementRef;
  @ViewChild('amountInput', {static:false}) amount: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  submit() {
    const ingName = this.name.nativeElement.value;
    const ingAmo = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmo);
    this.slService.addIngredient(newIngredient);
  }
}
