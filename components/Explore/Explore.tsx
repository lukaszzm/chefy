import { useRandomRecipe } from "@/hooks/useRandomRecipe";
import { Recipe } from "./Recipe";
import { RecipeError } from "./RecipeError";
import { RecipeLoading } from "./RecipeLoading";

export const Explore: React.FC = () => {
  const { data, error, isValidating, refetchData } = useRandomRecipe();

  if (isValidating) return <RecipeLoading />;

  if (error)
    return (
      <RecipeError
        title="Something went wrong."
        text="Try again later."
        bgColor="red"
      />
    );

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

  return (
    <RecipeError
      title="No more recipes found."
      text="Change preferences to discover more recipes!"
      bgColor="gray"
    />
  );
};
