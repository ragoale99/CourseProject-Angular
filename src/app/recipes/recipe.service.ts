import { Recipe } from "./recipe.model";

export class RecipeService {
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
    // invocando slice() senza parametri sto ritornando una copia dell'array recipes
    // non voglio infatti dare direttamente l'array ai vari componenti
    // const copy: Recipe[] = ...this.recipes; non posso fare sta cosa a causa di "this"
    return this.recipes.slice();
  }
}
