import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBar } from './navbar/navbar.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details..component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
