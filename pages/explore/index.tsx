import { NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { Recipe } from "../../components/Recipe/Recipe";

const Explore: NextPage = () => {
  return (
    <>
      <h1 className="text-primary font-bold text-xl capitalize mb-5">
        explore
      </h1>
      <Recipe />
    </>
  );
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
