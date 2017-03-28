import { Component } from '@angular/core';

export class Recipe {
  constructor(public title: string, public instructions: string, public rating: number){}
}

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>{{recipeList}}</h3>
     <ul>
       <li [class]="ratingColor(currentRecipe)" *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}<button (click)="editRecipe(currentRecipe)">Edit!</button></li>
     </ul>
     <hr>
    <div>
      <div *ngIf="selectedRecipe">
     <h3>{{selectedRecipe.title}}</h3>
    <h3>Edit Recipe</h3>
    <label>Enter Recipe Instructions:</label>
    <input [(ngModel)]="selectedRecipe.instructions">
     <label>Enter Recipe Rating (1-3):</label>
     <br>
     <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="1">1 (Low Rating)<br>
     <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="2">2 (Medium Rating)<br>
     <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="3">3 (High Rating)
     <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})


export class AppComponent {
  recipeList: string = 'Recipe List';
  recipes: Recipe[]= [
    new Recipe('Burrito Bowl', 'Taco Meat', 2),
    new Recipe('Poke Bowl', 'Raw Fish', 1),
    new Recipe('Gyro', 'Lamb Meat', 3)
  ];
  selectedRecipe = null;

  editRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  ratingColor(currentRecipe){
  if (currentRecipe.rating === 1){
    return "bg-danger";
  } else if (currentRecipe.rating === 2) {
    return  "bg-warning";
  } else {
    return "bg-info";
  }
}
}
