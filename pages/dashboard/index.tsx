import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LoadingScreen } from "../../components/LoadingScreen";
import { Menu } from "../../components/Menu";

const Dashboard: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingScreen />;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return <Menu />;
};

export default Dashboard;
