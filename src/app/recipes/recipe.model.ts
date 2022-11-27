export default class RecipeModel{
    public name:string;
    public description:string;
    public image:string;
    public ingredients:string[];

    constructor(name:string, desc:string, image:string, ingredients:string[]){
        this.name = name;
        this.description = desc;
        this.image = image;
        this.ingredients = ingredients;
    }
}