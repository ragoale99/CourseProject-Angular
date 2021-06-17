import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  // evento che trasporta dati di tipo Recipe (oggetto contente il nome, la descrizione e l'imgPath di una ricetta)
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // array di ricette su cui si itera per mostrare a video tutte le ricette
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}

  /* 
		onRecipeSelected riceve in input la ricetta cliccata (recipeEl) e la passa all'evento recipeWasSelected
	*/
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
