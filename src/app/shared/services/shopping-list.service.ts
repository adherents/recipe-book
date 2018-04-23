import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    ingredientsSlice() {
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    private ingredients: Ingredient[] = [
        new Ingredient('Banana', 10),
        new Ingredient('Kiwi', 25)
    ];

    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsSlice();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsSlice();
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsSlice();
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsSlice();
    }
}