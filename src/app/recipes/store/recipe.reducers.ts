
import { Recipe } from '../recipe.model';
// import { Ingredient } from 'src/app/shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';
import { Ingredient } from 'src/app/shared/ingredient.model';

export interface FeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe(
            'Cheese Cake',
            'Topped with berries',
            'https://www.thereciperebel.com/wp-content/uploads/2018/05/no-bake-white-chocolate-raspberry-cheesecake-www.thereciperebel.com-600-2.jpg',
            [
                new Ingredient('Milk', 1),
                new Ingredient('Cheese', 3),
                new Ingredient('Berries', 23),
                new Ingredient('BreadCrumbs', 40),
                new Ingredient('Suger', 5),
            ]),
        new Recipe('Chocolate Chip',
            'Mixed with white, milk and dark chocolate',
            'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg',
            [
                new Ingredient('Milk', 1),
                new Ingredient('White Chocolate', 3),
                new Ingredient('Milk Chocolate', 4),
                new Ingredient('Dark Chocolate', 2),
                new Ingredient("Suger", 20),
                new Ingredient('Bakeing Power', 0.3),
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe('Hummus',
            "Yummy Yummy, in m'tummy",
            'https://www.howsweeteats.com/wp-content/uploads/2018/07/hummus-trio-I-howsweeteats.com-10.jpg',
            [
                new Ingredient('Hummus', 1),
                new Ingredient('Solt', 3),
                new Ingredient('Chickpee', 4),
                new Ingredient('Paprecia', 2),
            ]),

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
            recipes: [...state.recipes, action.payload]
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
        const oldRecipes = [...state.recipes];
        oldRecipes.splice(action.payload, 1);
        return {
            ...state,
            recipes: oldRecipes
        };
        default:
            return state;
    }
    return state;
}