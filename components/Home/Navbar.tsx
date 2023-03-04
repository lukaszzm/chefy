import { Button } from "../UI/Button";
import { Logo } from "../UI/Logo";

interface INavBarProps {
  openLoginModal: () => void;
}

export const NavBar: React.FC<INavBarProps> = (props) => {
  const { openLoginModal } = props;

  return (
    <div className="fixed h-22 flex bg-gray-100 z-20 flex-wrap justify-between items-center p-2 px-4 w-full font-medium text-xl border-b-2">
      <Logo />
      <div className="flex items-center">
        <Button type="primary" onClick={openLoginModal} className="px-6">
          Login
        </Button>
      </div>
    </div>
  );
};
