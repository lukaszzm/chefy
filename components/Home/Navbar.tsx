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
      <Title className="text-4xl">Chefy</Title>
      <div>
        <Link href="/about" className="m-10">
          About
        </Link>
        <Button
          type="primary"
          onClick={openLoginModal}
          className="inline-block w-24 px-6 py-2.5 bg-primary text-white font-medium text-m leading-tight rounded shadow-md hover:bg-primary-hover hover:shadow-lg focus:bg-primary-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-hover active:shadow-lg transition duration-150 ease-in-out"
        >
          Login
        </Button>
      </div>
    </div>
  );
};
