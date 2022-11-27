import { Component, EventEmitter, Output } from '@angular/core';
import { Event } from '@angular/router';
import RecipeModel from '../recipes/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  isShown:boolean = false;
  name:string = "";
  description:string = "";
  ingredient:string = "";
  ingredients:string[] = [];
  image:string = "";
  @Output() recipeCreated = new EventEmitter<RecipeModel>();
  @Output() recipeModalClosed = new EventEmitter<void>();

  onNameChange(e:KeyboardEvent){
    this.name = (e.target as HTMLInputElement).value;
  }

  onDescriptionChange(e:KeyboardEvent){
    this.description = (e.target as HTMLInputElement).value;
  }

  onIngredientChange(e:KeyboardEvent){
    this.ingredient = (e.target as HTMLInputElement).value;
  }

  onImageChange(e:KeyboardEvent){
    this.image = (e.target as HTMLInputElement).value
  }

  onIngredientSubmit(_e:MouseEvent){
    this.ingredients.push(this.ingredient);
    this.ingredient = ""
  }

  onClose(_e:MouseEvent){
    this.isShown = false;
  }

  handleAddingRecipe(_e:MouseEvent){
    this.recipeCreated.emit({
      name: this.name,
      description: this.description,
      image: this.image,
      ingredients: this.ingredients
    });
  }

  handleClosingModal(_e:MouseEvent){
    this.recipeModalClosed.emit();
  }
}
