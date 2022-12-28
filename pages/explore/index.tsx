import { NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { RecipePreview } from "../../components/RecipePreview";

const Explore: NextPage = () => {
  return (
    <>
      <h1 className="text-primary font-bold text-xl capitalize mb-5">
        explore
      </h1>
      <RecipePreview />
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
