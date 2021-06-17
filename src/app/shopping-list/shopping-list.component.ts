import { Component, OnInit } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.sevice";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  // tutte le inizializzazioni è buona norma farle dentro ngOnInit
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChange.subscribe(
      (ingredients: Ingredient[]): void => {
        this.ingredients = ingredients;
      }
    );
  }
}
