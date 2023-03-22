import { GetServerSideProps, NextPage } from "next";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { Explore } from "@/components/Explore";

const ExplorePage: NextPage = () => {
  return <Explore />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permament: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};

export default ExplorePage;
