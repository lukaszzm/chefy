import { Button } from "../UI/Button";
import { Title } from "../UI/Title";

interface IWelcomeProps {
  openModal: () => void;
}

export const Welcome: React.FC<IWelcomeProps> = (props) => {
  const { openModal } = props;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-100 via-gray-100 to-green-100">
      <Title className="text-5xl">Let&apos;s swipe!</Title>
      <p className="text-2xl mb-6">To discover new lovely recipes...</p>
      <Button type="primary" onClick={openModal} className="w-72 uppercase">
        Sign up
      </Button>
    </div>
  );
};
