import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class DataStorageService {
	constructor(
		private httpClient: HttpClient, 
		private recipeService: RecipeService) { }

	storeRecipes() {
		const req = new HttpRequest('PUT', 'https://recipe-book-new.firebaseio.com/recipes.json',
			this.recipeService.getRecipes(), {reportProgress: true});
		return this.httpClient.request(req);
	}

	getRecipes() {
		this.httpClient.get<Recipe[]>('https://recipe-book-new.firebaseio.com/recipes.json', {
			observe: 'body'
		})
			.map(
				(recipes) => {
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