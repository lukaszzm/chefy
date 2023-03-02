import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import prisma from "../../lib/prisma";
import { IRecipe } from "../../interfaces/Recipe.interface";
import { LikedRecipe } from "../../components/Likes/LikedRecipe";
import { Title } from "../../components/UI/Title";
import { Pagination } from "../../components/Likes/Pagination";

interface ILikesProps {
  recipes: IRecipe[];
  currentPage: number;
  totalPages: number;
}

const Likes: NextPage<ILikesProps> = (props) => {
  const { recipes, currentPage, totalPages } = props;

  if (recipes.length > 0)
    return (
      <>
        <Title>Your liked recipes</Title>
        {recipes.map((el) => (
          <LikedRecipe
            key={el.id}
            id={el.id}
            title={el.title}
            area={el.area.name}
            category={el.category.name}
            ingredients={el.ingredients}
            instructions={el.instructions}
          />
        ))}
        <Pagination currentPage={currentPage} />
        <p>Total Pages: {totalPages}</p>
      </>
    );

  return (
    <>
      <Title>Your liked recipes</Title>
      <p className="font-semibold text-gray-500">
        You don&apos;t have any recipes yet.
      </p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const userEmail = session?.user?.email;

  if (!session || !userEmail) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permament: false,
      },
    };
  }

  let page = 1;

  if (context.query.page)
    page = Array.isArray(context.query.page)
      ? parseInt(context.query.page[0]) || 1
      : parseInt(context.query.page) || 1;

  const recipes = await prisma.$transaction([
    prisma.recipe.count({
      where: {
        likers: {
          some: {
            email: userEmail,
          },
        },
      },
    }),
    prisma.recipe.findMany({
      skip: (page - 1) * 5,
      take: 5,
      where: {
        likers: {
          some: {
            email: userEmail,
          },
        },
      },
      include: {
        category: true,
        area: true,
      },
    }),
  ]);

  console.log(recipes[0] / 5);

  return {
    props: {
      recipes: recipes[1],
      totalPages: Math.ceil(recipes[0] / 5),
      currentPage: page,
    },
  };
};

export default Likes;
