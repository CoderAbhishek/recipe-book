import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeDisplay = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Recipe 1', 'This is Recipe 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('Recipe 2', 'This is Recipe 2', 'https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg')
      ];
      
    getRecipe() {
        return this.recipes.slice();
    }
    
}