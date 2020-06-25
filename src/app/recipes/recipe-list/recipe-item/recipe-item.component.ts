import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

// import { Recipe } from '../../recipe.model'; 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() item: Recipe;

  // @Output() itemDetails = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
      }

  onItemSelected(){
    // this.itemDetails.emit();
    this.recipeService.recipeDisplay.emit(this.item);

  }
}
