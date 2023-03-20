import { NextPage } from "next";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { Explore } from "../../components/Explore/Explore";

const ExplorePage: NextPage = () => {
  return <Explore />;
};

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

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

export default ExplorePage;
