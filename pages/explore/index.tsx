import { NextPage } from "next";
import { authOptions } from "../api/auth/[...nextauth]";
import { Recipe } from "../../components/Recipe/Recipe";
import { getIngredientsList } from "../../utils/getIngredientsList";
import { Recipe as IRecipe } from "../../interfaces/Recipe.interface";
import { unstable_getServerSession } from "next-auth";

interface IExploreProps {
  recipe: IRecipe;
}
const Explore: NextPage<IExploreProps> = (props) => {
  const { recipe } = props;

  return (
    <Recipe
      title={recipe.strMeal}
      img={recipe.strMealThumb}
      category={recipe.strCategory}
      area={recipe.strArea}
      ingredientsList={recipe.ingredientsList}
      instructions={recipe.strInstructions}
    />
  );
};

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permament: false,
      },
    };
  }
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  const ingredientsList = getIngredientsList(data.meals[0]);
  const recipe = { ...data.meals[0], ingredientsList };

  return {
    props: { recipe },
  };
}

export default Explore;
