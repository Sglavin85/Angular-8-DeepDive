import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/models/ingredient/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('ammountInput', {static: false}) ammountInputRef: ElementRef;
  @ViewChild('measurementInput', {static: false}) measurementInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmmount = this.ammountInputRef.nativeElement.value;
    const ingMeasurement = this.measurementInputRef.nativeElement.value;
    var newIngredient;

    if(this.measurementInputRef.nativeElement.value){
      newIngredient = new Ingredient(ingName, ingAmmount, ingMeasurement);
    }else{
      newIngredient = new Ingredient(ingName, ingAmmount);
    }
    this.shoppingListService.addIngredient(newIngredient);
  }

}
