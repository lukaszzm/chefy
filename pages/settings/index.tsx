import { NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

interface ISettingsProps {
  mail: string;
}

const Settings: NextPage<ISettingsProps> = (props) => {
  const { mail } = props;

  return (
    <>
      <h1>Settings</h1>
      <p>
        Logged as <span className="text-red-600 font-bold">{mail}</span>
      </p>
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
    props: { mail: session.user?.email },
  };
}

export default Settings;
