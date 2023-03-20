import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import prisma from "../../lib/prisma";
import { IArea } from "../../interfaces/Area.interface";
import { ICategory } from "../../interfaces/Category.interface";
import { Settings } from "../../components/Settings/Settings";

interface ISettingsPageProps {
  name: string;
  allAreas: IArea[];
  allCategories: ICategory[];
  defaultAreas: IArea[];
  defaultCategories: ICategory[];
}

const SettingsPage: NextPage<ISettingsPageProps> = (props) => {
  return <Settings {...props} />;
};

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;

  if (!session || !userEmail || !userName) {
    return {
      redirect: {
        destination: "/",
        permament: false,
      },
    };
  }

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
      name: userName,
      allAreas,
      allCategories,
      defaultCategories,
      defaultAreas,
    },
  };
}

export default SettingsPage;
