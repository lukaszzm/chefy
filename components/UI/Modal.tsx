import { motion, AnimatePresence } from "framer-motion";
import { Title } from "./Title";

interface IModalProps {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
  isModalOpen: boolean;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { children, title, closeModal, isModalOpen } = props;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          />
          <motion.div
            initial={{ y: "-75%", x: "-50%", opacity: 0 }}
            animate={{ y: "-50%", x: "-50%", opacity: 1 }}
            exit={{ y: "-75%", x: "-50%", opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 top-1/2 left-1/2 py-8 px-10 border w-2/3 max-w-md shadow-lg rounded-md bg-white"
          >
            <Title className="text-center text-3xl">{title}</Title>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
