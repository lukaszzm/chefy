import { Recipe } from "../interfaces/Recipe.interface";

export const getIngredientsList = (recipe: Recipe) => {
  const ingredientsList: string[] = [];
  for (const [key, value] of Object.entries(recipe)) {
    if (key.startsWith("strIngredient") && value !== "")
      ingredientsList.push(value);
  }
  return ingredientsList;
};
