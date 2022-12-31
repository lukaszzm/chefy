import { Menu } from "../components/Menu/Menu";
import { Container } from "../components/Container";
import { NextPage } from "next";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const Layout: NextPage<IDashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-screen h-screen flex">
      <Menu />
      <Container>{children}</Container>
    </div>
  );
};
