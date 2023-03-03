import { Menu } from "../components/Menu/Menu";
import { Container } from "../components/UI/Container";
import { NextPage } from "next";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const Layout: NextPage<IDashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-full h-full overflow-auto flex">
      <Menu />
      <Container>{children}</Container>
    </div>
  );
};
