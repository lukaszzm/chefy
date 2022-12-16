import { useSession } from "next-auth/react";
import { Menu } from "../components/Menu";
import { useRouter } from "next/router";
import { LoadingScreen } from "../components/LoadingScreen";
import { NextPage } from "next";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const Layout: NextPage<IDashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Menu />
      {children}
    </>
  );
};
