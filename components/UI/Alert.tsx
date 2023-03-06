import classNames from "classnames";
import { motion } from "framer-motion";

interface IAlertProps {
  children: React.ReactNode;
  className?: string;
  isError?: boolean;
}

export const Alert: React.FC<IAlertProps> = (props) => {
  const { className, children, isError } = props;

  const styles = classNames(
    `w-11/12 m-auto text-white p-3 rounded text-sm ${className}`,
    {
      "bg-red-400": isError,
      "bg-green-400": !isError,
    }
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles}
    >
      <p>{children}</p>
    </motion.div>
  );
};
