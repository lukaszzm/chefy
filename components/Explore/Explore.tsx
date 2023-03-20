import { useRandomRecipe } from "../../hooks/useRandomRecipe";
import { Recipe } from "./Recipe";
import { RecipeError } from "./RecipeError";
import { RecipeLoading } from "./RecipeLoading";
import { RecipeNotFound } from "./RecipeNotFound";

export const Explore = () => {
  const { data, error, isValidating, refetchData } = useRandomRecipe();

  if (isValidating) return <RecipeLoading />;

  if (error) return <RecipeError />;

  if (data)
    return (
      <Recipe
        id={data.id}
        title={data.title}
        imageSrc={data.imageSrc}
        category={data.category}
        area={data.area}
        ingredients={data.ingredients}
        instructions={data.instructions}
        refetchRecipe={() => refetchData()}
      />
    );

  return <RecipeNotFound />;
};
