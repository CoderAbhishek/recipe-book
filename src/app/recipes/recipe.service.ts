import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeDisplay = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'Recipe 1', 
            'This is Recipe 1', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Chapati',4),
                new Ingredient('Naan',2)
            ]),
        new Recipe(
            'Recipe 2', 
            'This is Recipe 2', 
            'https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg',
            [
                new Ingredient('Chapati',4),
                new Ingredient('Naan',2)
            ])
      ];
      
    getRecipe() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}