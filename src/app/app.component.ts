import { Component } from '@angular/core';
import RecipeModel from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRecipe:RecipeModel|undefined;

  onCurrentRecipeSet(currentRecipe:RecipeModel){
    this.currentRecipe = currentRecipe;
  }
}
