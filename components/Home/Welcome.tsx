import { Button } from "../UI/Button";
import { Title } from "../UI/Title";
import { Subtitle } from "../UI/Subtitle";
import { FoodIcons } from "./FoodIcons";

interface IWelcomeProps {
  openModal: () => void;
}

export const Welcome: React.FC<IWelcomeProps> = (props) => {
  const { openModal } = props;

  return (
    <div className="w-full h-full flex items-center justify-center text-center">
      <div className="max-w-4xl p-6">
        <Title className="text-7xl sm:text-8xl font-extrabold mx-2 mb-12">
          Welcome to our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
            recipe{" "}
          </span>
          app!
        </Title>
        <Subtitle className="text-xl text-center font-normal lg:text-2xl text-gray-600 my-6">
          We&apos;re excited to help you discover new and delicious recipes with
          just a swipe of your finger. Our app is designed to make meal planning
          and cooking easy and fun, with a wide variety of recipes from all over
          the world.
        </Subtitle>
        <FoodIcons />
        <Button type="primary" onClick={openModal} className="w-64 capitalize">
          Get started
        </Button>
      </div>
    </div>
  );
};
