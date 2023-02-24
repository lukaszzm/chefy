import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import prisma from "../../lib/prisma";
import { IRecipe } from "../../interfaces/Recipe.interface";
import { LikedRecipe } from "../../components/Likes/LikedRecipe";

interface ILikesProps {
  recipes: IRecipe[];
}

const Likes: NextPage<ILikesProps> = (props) => {
  const { recipes } = props;

  return (
    <>
      <h1 className="font-semibold text-gray-800 text-2xl capitalize mb-5">
        your liked recipes
      </h1>
      {recipes.length > 0 ? (
        recipes.map((el) => (
          <LikedRecipe
            key={el.id}
            id={el.id}
            title={el.title}
            area={el.area.name}
            category={el.category.name}
            ingredients={el.ingredients}
            instructions={el.instructions}
          />
        ))
      ) : (
        <p className="font-semibold text-gray-500">
          You don&apos;t have any recipes yet.
        </p>
      )}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || !session.user?.email) {
    return {
      redirect: {
        destination: "/",
        permament: false,
      },
    };
  }

  const recipes = await prisma.recipe.findMany({
    take: 5,
    where: {
      likers: {
        some: {
          email: session.user.email,
        },
      },
    },
    include: {
      category: true,
      area: true,
    },
  });

  return {
    props: { recipes },
  };
}

export default Likes;
