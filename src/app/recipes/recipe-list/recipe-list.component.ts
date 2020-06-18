import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is Recipe 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Recipe 2', 'This is Recipe 2', 'https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  itemReceived(recipeItem: Recipe) {
    this.selectedRecipe.emit(recipeItem);
  }
}
