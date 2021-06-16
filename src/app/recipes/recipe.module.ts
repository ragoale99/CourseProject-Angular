/*
 * Sfruttando le classi di TS,
 * definisco la struttura dei miei Recipe, creo un "modello"
 */

/* 
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
*/

//* SHORTCUT
export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string
  ) {}
}
