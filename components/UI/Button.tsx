import classNames from "classnames";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type: "primary" | "danger" | "outline-danger" | "none";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, className, type, disabled, fullWidth, onClick } = props;

  const style = classNames(
    "font-semibold disabled:opacity-60 disabled:pointer-events-none text-l leading-tight rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out",
    {
      "border border-primary bg-primary text-white hover:bg-primary-hover py-3 my-2 hover:border-primary-hover focus:bg-primary-hover focus:border-primary-hover active:bg-primary-hover active:border-primary-hover active:shadow-lg focus:shadow-lg hover:shadow-lg shadow-md":
        type === "primary",
      "border border-red-400 bg-red-400 text-white hover:bg-red-500 py-3 my-2 hover:border-red-500 focus:bg-red-500 focus:border-red-500 active:bg-red-500 active:border-red-500 active:shadow-lg focus:shadow-lg hover:shadow-lg shadow-md":
        type === "danger",
      "border border-red-400 text-red-400 hover:bg-red-400 hover:text-white py-3 my-2 focus:bg-red-500 focus:border-red-500 active:bg-red-500 active:border-red-500 active:shadow-lg focus:shadow-lg hover:shadow-lg shadow-md":
        type === "outline-danger",
      "w-full": fullWidth,
    }
  );

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${className} ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
