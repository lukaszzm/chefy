import { motion } from "framer-motion";

interface IAlertProps {
  children: React.ReactNode;
  className?: string;
  isError?: boolean;
}

export const Alert: React.FC<IAlertProps> = (props) => {
  const { className, children, isError } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-11/12 m-auto text-white p-3 rounded text-sm ${className} ${
        isError ? "bg-red-400" : "bg-green-400"
      }`}
    >
      <p>{children}</p>
    </motion.div>
  );
};
