import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  console.log(status);
  return <h1>TEST</h1>;
};

export default Dashboard;
