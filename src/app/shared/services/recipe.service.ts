import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Injectable()
export class RecipeService {
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

    constructor(private shoplistService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoplistService.addIngredients(ingredients);
    }
}