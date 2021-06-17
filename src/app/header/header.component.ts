import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  /* aggiungo un evento in Output dall'Header: featureSelected */
  /* l'evento porta con se dei dati di tipo string (il tipo dei dati è definito tra <>)*/
  @Output() featureSelected = new EventEmitter<string>();

  /* metodo onSelect(feature: string) con feature = 'recipe' se è stato cliccato il link Recipes  */
  /* metodo onSelect(feature: string) con feature = 'shopping-list' se è stato cliccato il link Shopping List  */
  onSelect(feature: string) {
    /* 
			faccio l'emit dell'evento featureSelected => viene scatenato l'evento dove lo chiamo tra () 
			ci passo feature ('recipe' o 'shopping-list')
		*/
    this.featureSelected.emit(feature);
  }
}
