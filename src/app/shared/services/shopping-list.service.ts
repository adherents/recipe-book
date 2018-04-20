import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Banana', 10),
        new Ingredient('Kiwi', 25)
    ];

    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}