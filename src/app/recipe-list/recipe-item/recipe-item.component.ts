import { Component, EventEmitter, Input, Output } from '@angular/core';
import RecipeModel from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() index:number|undefined;
  @Input() recipe:RecipeModel|undefined;
  @Output() recipeDeleted = new EventEmitter<number>()

  handleDeleteClick(e:MouseEvent){
    if(this.index !== undefined){
      this.recipeDeleted.emit(this.index);
    }
  }
}
