import { NextPage } from "next";
import { authOptions } from "../api/auth/[...nextauth]";
import { Recipe } from "../../components/Recipe/Recipe";
import { RecipeLoading } from "../../components/Recipe/RecipeLoading";
import { unstable_getServerSession } from "next-auth";
import { useRandomRecipe } from "../../hooks/useRandomRecipe";
import { RecipeError } from "../../components/Recipe/RecipeError";
import { RecipeNotFound } from "../../components/Recipe/RecipeNotFound";

const Explore: NextPage = () => {
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

  return {
    props: {},
  };
}

export default Explore;
