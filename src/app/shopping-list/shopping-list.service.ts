// import { Subject } from 'rxjs';
// import { Ingredient } from '../shared/ingredient.model';

// export class ShoppingListService {
//     ingredientsChanged = new Subject<Ingredient[]>();
//     startedEditing = new Subject<number>();

//   private ingredients: Ingredient[] = [
//     new Ingredient('Apples', 5),
//     new Ingredient('Tomatoes', 10),
//   ];

//   getIngredient(index:number) {
//     return this.ingredients[index];
//   }

//   // getIngredients() {
//   //   return this.ingredients.slice();
//   // }

//   // addIngredient(ingredient: Ingredient) {
//   //   this.ingredients.push(ingredient);
//   //   this.ingredientsChanged.next(this.ingredients.slice());
//   // }


//     addIngredients(ingredients: Ingredient[]) {
//       // for (let ingredient of ingredients) {
//       //   this.addIngredient(ingredient);
//       // }
//       this.ingredients.push(...ingredients);
//       this.ingredientsChanged.next(this.ingredients.slice());
//     }

//     updateIngredient(index:number, newIngredient: Ingredient) {
//       this.ingredients[index] = newIngredient;
//       this.ingredientsChanged.next(this.ingredients.slice());
//     }

//     deletIngredient(index:number) {
//       this.ingredients.splice(index);
//       this.ingredientsChanged.next(this.ingredients.slice());
//     }
//   }
