import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  // array di ricette su cui si itera per mostrare a video tutte le ricette
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
    // invocando slice() senza parametri sto ritornando una copia dell'array recipes
    // non voglio infatti dare direttamente l'array ai vari componenti
    // const copy: Recipe[] = ...this.recipes; non posso fare sta cosa a causa di "this"
  }
}
