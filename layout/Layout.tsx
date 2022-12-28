import { Menu } from "../components/Menu";
import { Container } from "../components/Container";
import { NextPage } from "next";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const Layout: NextPage<IDashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-full h-full flex">
      <Menu />
      <Container>{children}</Container>
    </div>
  );
};
