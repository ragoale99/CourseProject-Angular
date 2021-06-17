import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  /* di default è === 'recipe' => inizialmente vedrò il componente delle ricette  */
  loadedFeature = "recipe";

  /* 
		'feature' rappresenta i dati contenuti in $event ('recipe' o 'shopping-list') 
		assegno quindi il valore passato a loadedFeature,
		per poi fare il check su di esso (nel template con *ngIf) per decidere che componente mostrare a video
	*/
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
