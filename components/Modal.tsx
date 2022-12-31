import { motion, AnimatePresence } from "framer-motion";

interface IModalProps {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
  isModalOpen: boolean;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { children, title, closeModal, isModalOpen } = props;

  console.log(isModalOpen);
  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          />
          <motion.div
            initial={{ y: "-75%", x: "-50%", opacity: 0 }}
            animate={{ y: "-50%", x: "-50%", opacity: 1 }}
            exit={{ y: "-75%", x: "-50%", opacity: 0 }}
            className="fixed top-1/2 left-1/2 py-8 px-10 border w-96 shadow-lg rounded-md bg-white z-20"
          >
            <h2 className="text-center text-3xl font-semibold mb-5 capitalize">
              {title}
            </h2>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
