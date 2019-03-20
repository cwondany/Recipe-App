import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Patty', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Salad', 1)
      ]),
    new Recipe('Another Test Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Noddles', 1),
        new Ingredient('Sauce', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
