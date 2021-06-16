import { Component, OnInit } from '@angular/core';

/*
 * RICORDO: "selector" per utilizzare il componente esternamente (<app-header></app-header>),
 * "templateUrl" per definire in quale file si trova il template (.html) del componente
 * (in aternativa si può usare "template" e mettere il template inline tra ` `)
 * "stylesUrls" per definire i file in cui si trova lo stile per il componente (.css)
 * (in alternativa si può usare "styles" e mettere lo stile inline tra ` `)
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor() {}

  ngOnInit(): void {}
}
