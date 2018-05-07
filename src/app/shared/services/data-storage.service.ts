import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class DataStorageService {
	constructor(private http: Http, private recipeService: RecipeService) { }

	storeRecipes() {
		return this.http.put('https://recipe-book-new.firebaseio.com/recipes.json', 
			this.recipeService.getRecipes());
	}

	getRecipes() {
		this.http.get('https://recipe-book-new.firebaseio.com/recipes.json')
			.map(
				(response: Response) => {
					const recipes: Recipe[] = response.json();
					for (let recipe of recipes) {
						if (!recipe['ingredients']) {
							recipe['ingredients'] = [];
						}
					}
					return recipes;
				}
			)
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipeService.setRecipes(recipes);
				}
			);
	}
}