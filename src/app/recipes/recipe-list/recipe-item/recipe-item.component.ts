import { Component, OnInit, Input } from "@angular/core";
import { RecipeService } from "../../recipe.service";
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

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
