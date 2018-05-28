import { Subject } from 'rxjs/Subject';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe('Test',
			'Test description',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/5/27/0/0125629_03_chicken-in-skillet_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371589386937.jpeg',
			[
				new Ingredient('Chiken', 5),
				new Ingredient('Fries', 30)
			]),
		new Recipe('Test2',
			'Test description 2',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/5/27/0/0125629_03_chicken-in-skillet_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371589386937.jpeg',
			[
				new Ingredient('Chiken', 5),
				new Ingredient('Fries', 30)
			])
	];

	constructor() { }

	recipesSlice() {
		this.recipesChanged.next(this.recipes.slice());
	}

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesSlice();
	}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesSlice();
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesSlice();
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}