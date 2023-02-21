import { NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { Account } from "../../components/Settings/Account";
import { Preferences } from "../../components/Settings/Preferences";

interface ISettingsProps {
  name: string;
}

const Settings: NextPage<ISettingsProps> = (props) => {
  const { name } = props;

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
      <Preferences />
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
    props: { name: session.user?.name },
  };
}

export default Settings;
