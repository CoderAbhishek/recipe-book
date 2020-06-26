import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

    ingredientAdded = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient('Mango', 6),
        new Ingredient('Orange', 5)
      ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}