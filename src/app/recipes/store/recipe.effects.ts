import { HttpClient, HttpRequest } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RecipeActions from './recipe.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {

    @Effect()
    recipeFetch = this.actions$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap((action: RecipeActions.FetchRecipes) => {
            return this.HttpClient.get<Recipe[]>('https://cookbook-uv.firebaseio.com/recipes.json', {
                observe: 'body',
                responseType: 'json'
            })
        }),map(
                (recipes) => {
                    // console.log(recipes);
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }}
                    return {
                        type: RecipeActions.SET_RECIPES,
                        payload: recipes
                    };
                }));

    @Effect({dispatch: false})
    recipeStore = this.actions$.pipe(
        ofType(RecipeActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([action, state ]) => {
            const req =
            new HttpRequest('PUT','https://cookbook-uv.firebaseio.com/recipes.json',
                state.recipes, { reportProgress: true });
            return this.HttpClient.request(req);
        })
    );

    constructor(private actions$: Actions, private HttpClient: HttpClient,
                private store: Store<fromRecipe.FeatureState>) {}
}