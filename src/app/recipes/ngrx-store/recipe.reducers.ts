import { Recipe } from "../../shared/models/recipe.model";
import { Ingredient } from "../../shared/models/ingredient.model";

import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../ngrx-store/app.reducers';

export interface RecipeState extends fromApp.AppState {
  recipes: State
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
	]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes,action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const newRecipes = [...state.recipes];
      newRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: newRecipes
      }
    default: 
      return state;
  }
}