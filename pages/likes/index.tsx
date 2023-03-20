import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import prisma from "../../lib/prisma";
import { IRecipe } from "../../interfaces/Recipe.interface";
import { Likes } from "../../components/Likes/Likes";

interface ILikesPageProps {
  recipes: IRecipe[];
  currentPage: number;
  pageCount: number;
}

const LikesPage: NextPage<ILikesPageProps> = (props) => {
  return <Likes {...props} />;
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

  if (pageCount > 0 && page > pageCount)
    return {
      props: {},
      redirect: {
        destination: `/likes?page=${pageCount}`,
        permament: true,
      },
    };

  return {
    props: {
      pageCount: pageCount,
      recipes: recipes[1],
      currentPage: page,
    },
  };
};

export default LikesPage;
