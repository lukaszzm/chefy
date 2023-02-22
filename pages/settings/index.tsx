import { NextPage } from "next";
import { getServerSession, unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { Account } from "../../components/Settings/Account";
import { Preferences } from "../../components/Settings/Preferences";
import prisma from "../../lib/prisma";
import { IArea } from "../../interfaces/Area.interface";
import { ICategory } from "../../interfaces/Category.interface";

interface ISettingsProps {
  name: string;
  allAreas: IArea[];
  allCategories: ICategory[];
  defaultAreas: IArea[];
  defaultCategories: ICategory[];
}

const Settings: NextPage<ISettingsProps> = (props) => {
  const { name, allAreas, allCategories, defaultAreas, defaultCategories } =
    props;

  return (
    <>
      <h1 className="font-semibold text-gray-800 text-2xl capitalize mb-5">
        Settings
      </h1>
      <h2 className="text-left font-semibold w-full pb-1 border-b border-b-gray-400  text-lg">
        General Info
      </h2>
      <Account name={name} />
      <h2 className="text-left font-semibold w-full pb-1 border-b border-b-gray-400  text-lg">
        Preferences
      </h2>
      <Preferences
        allCategories={allCategories}
        allAreas={allAreas}
        defaultAreas={defaultAreas}
        defaultCategories={defaultCategories}
      />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || !session.user || !session.user.email) {
    return {
      redirect: {
        destination: "/",
        permament: false,
      },
    };
  }

  const userEmail = session.user.email;

  const allCategories = await prisma.category.findMany();
  const allAreas = await prisma.area.findMany();

  const defaultCategories = await prisma.category.findMany({
    where: {
      User: {
        some: {
          email: userEmail,
        },
      },
    },
  });

  const defaultAreas = await prisma.area.findMany({
    where: {
      User: {
        some: {
          email: userEmail,
        },
      },
    },
  });

  return {
    props: {
      name: userEmail,
      allAreas,
      allCategories,
      defaultCategories,
      defaultAreas,
    },
  };
}

export default Settings;
