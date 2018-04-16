import { Component, OnInit } from '@angular/core';

import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      });
  }

}
