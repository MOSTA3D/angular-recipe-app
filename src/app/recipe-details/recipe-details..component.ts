import { Component, Input } from "@angular/core"
import RecipeModel from "../recipes/recipe.model"
@Component({
    selector: "app-recipe-details",
    templateUrl: "./recipe-details.component.html",
    styleUrls: ["./recipe-details.component.css"],
})
export class RecipeDetailsComponent{
    @Input() recipe:RecipeModel|undefined = {
        name: "foool",
        ingredients: ["fool", "oil", "tomato", "fipper", "salt", "peanute butter"],
        description: "you should put the fool first , and then lsdjfl jsdkf josidfuwe rlsmdfo sioiuwer",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
    }
}