import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
