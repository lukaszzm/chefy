import { Button } from "@/ui/Button";
import { Logo } from "@/ui/Logo";

interface IHomeNavbarProps {
  openLoginModal: () => void;
}

export const NavBar: React.FC<IHomeNavbarProps> = (props) => {
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
