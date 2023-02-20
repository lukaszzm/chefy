import { NextPage } from "next";
import { authOptions } from "../api/auth/[...nextauth]";
import { Recipe } from "../../components/Recipe/Recipe";
import { unstable_getServerSession } from "next-auth";
import { useRandomRecipe } from "../../hooks/useRandomRecipe";

const Explore: NextPage = () => {
  const { data, error, isLoading, refetchData } = useRandomRecipe();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

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

  return <div>Nothing to see.</div>;
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
