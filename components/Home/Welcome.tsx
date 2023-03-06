import { Button } from "../UI/Button";
import { Title } from "../UI/Title";
import { motion } from "framer-motion";
import { SVG } from "./SVG";

interface IWelcomeProps {
  openModal: () => void;
}

export const Welcome: React.FC<IWelcomeProps> = (props) => {
  const { openModal } = props;

  return (
    <div className="w-full h-full md:h-screen overflow-auto flex items-center justify-center">
      <div className="flex mt-20 p-8 flex-col-reverse lg:flex-row justify-between items-center lg:gap-4 overflow-x-hidden md:overflow-x-auto">
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-left py-8"
        >
          <Title className="text-6xl lg:text-8xl">Let&apos;s swipe!</Title>
          <p className="text-xl lg:text-3xl text-gray-600 mb-6">
            To discover new lovely recipes...
          </p>
          <Button
            type="primary"
            fullWidth
            onClick={openModal}
            className="w-64 uppercase"
          >
            Sign up now
          </Button>
        </motion.div>
        <div className="z-10 bg-gray-200 rounded-full m-4">
          <SVG />
        </div>
      </div>
    </div>
  );
};
