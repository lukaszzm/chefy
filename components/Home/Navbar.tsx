import { Button } from "../UI/Button";
import { Logo } from "../UI/Logo";

interface INavBarProps {
  openLoginModal: () => void;
}

export const NavBar: React.FC<INavBarProps> = (props) => {
  const { openLoginModal } = props;

  return (
    <nav className="w-full mx-auto justify-self-start px-6 max-w-5xl flex items-center justify-between font-medium text-xl">
      <Logo />
      <Button type="primary" onClick={openLoginModal} className="px-6">
        Login
      </Button>
    </nav>
  );
};
