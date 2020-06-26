import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:true}) nameInputRef: ElementRef; 
  @ViewChild('amountInput', {static:true}) amountInputRef: ElementRef; 

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  addItem(){
    // this.ingredientAdded.emit({
      const name = this.nameInputRef.nativeElement.value;
      const amount = this.amountInputRef.nativeElement.value;
      const ingredient = {name: name, amount: amount};
    // });
    this.shopListService.addIngredient(ingredient);
  }
}
