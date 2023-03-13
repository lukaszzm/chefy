import { Button } from "../UI/Button";
import { Logo } from "../UI/Logo";

interface INavBarProps {
  openLoginModal: () => void;
}

export const NavBar: React.FC<INavBarProps> = (props) => {
  const { openLoginModal } = props;

  return (
    <nav className="w-full h-24 px-6 mx-auto max-w-5xl flex justify-between items-center font-medium text-xl">
      <Logo />
      <Button type="primary" onClick={openLoginModal} className="px-6">
        Login
      </Button>
    </nav>
  );
};
