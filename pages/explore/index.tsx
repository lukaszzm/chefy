import { NextPage } from "next";
import { authOptions } from "../api/auth/[...nextauth]";
import { Recipe } from "../../components/Recipe/Recipe";
import { getIngredientsList } from "../../utils/getIngredientsList";
import { Recipe as IRecipe } from "../../interfaces/Recipe.interface";
import { unstable_getServerSession } from "next-auth";
import { useRouter } from "next/router";

interface IExploreProps {
  recipe: IRecipe;
}
const Explore: NextPage<IExploreProps> = (props) => {
  const router = useRouter();

  return <div>TEST</div>;
  //   <Recipe
  //     title={recipe.strMeal}
  //     img={recipe.strMealThumb}
  //     category={recipe.strCategory}
  //     area={recipe.strArea}
  //     ingredientsList={recipe.ingredientsList}
  //     instructions={recipe.strInstructions}
  //     reFetchRecipe={reFetchRecipe}
  //   />
  // );
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
  const response = await fetch("http://localhost:3000/api/recipes/random", {
    headers: {
      cookie: context.req.headers.cookie || "",
    },
  });

  return {
    props: {},
  };
}

export default Explore;
