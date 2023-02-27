import Link from "next/link";
import { Title } from "../UI/Title";
import { Button } from "../UI/Button";

interface INavBarProps {
  openLoginModal: () => void;
}

export const NavBar: React.FC<INavBarProps> = (props) => {
  const { openLoginModal } = props;

  return (
    <div className="fixed flex flex-wrap justify-between items-center p-2 px-4 w-full font-medium text-xl border-b-2">
      <Title className="text-4xl mt-3">Chefy</Title>
      <div className="flex items-center">
        <Link href="/about" className="mx-6">
          About
        </Link>
        <Button type="primary" onClick={openLoginModal} className="px-6">
          Login
        </Button>
      </div>
    </div>
  );
};
