import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import prisma from "../../lib/prisma";
import { IRecipe } from "../../interfaces/Recipe.interface";
import { LikedRecipe } from "../../components/Likes/LikedRecipe";
import { Title } from "../../components/UI/Title";
import { Pagination } from "../../components/Likes/Pagination";
import { Card } from "../../components/UI/Card";

interface ILikesProps {
  recipes: IRecipe[];
  currentPage: number;
  pageCount: number;
}

const Likes: NextPage<ILikesProps> = (props) => {
  const { recipes, currentPage, pageCount } = props;

  return (
    <Card>
      <Title className="mb-8">Your liked recipes</Title>
      {recipes.length > 0 ? (
        <>
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
          <Pagination currentPage={currentPage} pageCount={pageCount} />
        </>
      ) : (
        <p className="font-semibold text-gray-500 my-auto">
          You don&apos;t have any recipes yet.
        </p>
      )}
    </Card>
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

  const pageCount = Math.ceil(recipes[0] / 5);

  if (page > pageCount)
    return {
      props: {},
      redirect: {
        destination: `/likes?page=${pageCount}`,
        permament: true,
      },
    };

  return {
    props: {
      pagesCount: pageCount,
      recipes: recipes[1],
      currentPage: page,
    },
  };
};

export default Likes;
