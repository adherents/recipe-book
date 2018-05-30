import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/withLatestFrom';
import { Store } from '@ngrx/store';

import * as RecipeActions from '../ngrx-store/recipe.actions';
import { Recipe } from '../../shared/models/recipe.model';
import * as fromRecipe from '../ngrx-store/recipe.reducers';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>('https://recipe-book-new.firebaseio.com/recipes.json', {
        observe: 'body'
      })
    })
    .map(
      (recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    );

  @Effect({dispatch: false})
  recipeStore = this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://recipe-book-new.firebaseio.com/recipes.json',
			state.recipes, {reportProgress: true});
		  return this.httpClient.request(req);
    });
    

  constructor(private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromRecipe.RecipeState>) {}
}