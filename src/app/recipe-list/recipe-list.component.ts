import { Component, EventEmitter, Output } from '@angular/core';
import RecipeModel from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:RecipeModel[] = [
    {
      name: "sheka",
      description: "this lsdf sis the something recipe that",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
      ingredients: ["rox", "sha3eer", "katshab"]
    },{
      name: "boka",
      description: "mish sharqy wala 8arby howa 7aga",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg",
      ingredients: ["pasmaty", "ramadan", "katshab"]
    },{
      name: "rika",
      description: "sharqy w 8arby w ganoby kaman",
      image: "https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg",
      ingredients: ["kabab", "la7ma", "katshab"]
    }
  ]
  
  isRecipeModalShown:boolean = false;
  @Output() recipeSelected = new EventEmitter();

  onRecipeAdded(recipe:RecipeModel){
    this.recipes.push(recipe);
  }

  onRecipeDeleted(index:number){
    this.recipes.splice(index, 1);
  }

  toggleShowModal(_e:MouseEvent|void){
    this.isRecipeModalShown = !this.isRecipeModalShown;
  }

  onRecipeSelect(recipe:RecipeModel){
    this.recipeSelected.emit(recipe);
  }
}
