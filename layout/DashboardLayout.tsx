import { Menu } from "../components/Menu";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<IDashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Menu />
      {children}
    </>
  );
};
