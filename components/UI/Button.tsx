import classNames from "classnames";
import { LoadingSpinner } from "./LoadingSpinner";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type: "primary" | "danger" | "outline-danger" | "none";
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, className, type, disabled, isLoading, fullWidth, onClick } =
    props;

  const style = classNames(
    "font-medium disabled:opacity-60 disabled:pointer-events-none text-l leading-tight rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out",
    {
      "border py-3 my-2 active:shadow-lg focus:shadow-lg hover:shadow-lg shadow-md":
        type !== "none",
      "border-primary bg-primary text-white hover:bg-primary-hover hover:border-primary-hover focus:bg-primary-hover focus:border-primary-hover active:bg-primary-hover active:border-primary-hover":
        type === "primary",
      "border-red-400 bg-red-400 text-white hover:bg-red-500 hover:border-red-500 focus:bg-red-500 focus:border-red-500 active:bg-red-500 active:border-red-500":
        type === "danger",
      "border-red-400 text-red-400 hover:bg-red-400 hover:text-white focus:bg-red-500 focus:border-red-500 active:bg-red-500 active:border-red-500":
        type === "outline-danger",
      "w-full": fullWidth,
    }
  );

  const loadingSpinnerColor =
    type === "danger" || type === "outline-danger" ? "red" : "white";

  return (
    <button
      type="submit"
      disabled={disabled || isLoading}
      className={`${className} ${style}`}
      onClick={onClick}
    >
      {isLoading ? <LoadingSpinner color={loadingSpinnerColor} /> : children}
    </button>
  );
};
