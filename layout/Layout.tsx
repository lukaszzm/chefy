import { useSession } from "next-auth/react";
import { Menu } from "../components/Menu";
import { useRouter } from "next/router";
import { LoadingScreen } from "../components/LoadingScreen";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IDashboardLayoutProps> = (props) => {
  const { children } = props;
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingScreen />;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <>
      <Menu />
      {children}
    </>
  );
};
