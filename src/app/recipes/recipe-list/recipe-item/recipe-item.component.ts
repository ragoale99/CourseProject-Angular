import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  /* 
		si prende "recipe" in input dal componente padre "recipe-list" 
		dove avviene l'assegnazione [recipe]="recipeEl" , con recipeEl che rappresenta una ricetta nell'array di ricette "recipes"
		atttraverso "recipe" si ha all'interno del componente tutte le info della ricetta (name, description, imgPath)
	*/
  @Input() recipe: Recipe;

  // l'evento non deve portare con se informazioni quindi è di tipo <void>
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  // onSelected si occupa solo di emettere l'evento recipeSelected (quando una ricetta è cliccata)
  onSelected() {
    this.recipeSelected.emit();
  }
}
