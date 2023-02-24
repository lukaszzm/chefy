import classNames from "classnames";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type: "primary" | "danger" | "outline-danger" | "none";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, className, type, disabled, onClick } = props;

  const style = classNames(
    "font-semibold disabled:opacity-60 disabled:pointer-events-none py-3 text-l my-2 leading-tight rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out",
    {
      "border w-full border-primary bg-primary text-white hover:bg-primary-hover hover:border-primary-hover focus:bg-primary-hover focus:border-primary-hover active:bg-primary-hover active:border-primary-hover active:shadow-lg focus:shadow-lg hover:shadow-lg shadow-md":
        type === "primary",
      "border w-full border-red-400 bg-red-400 text-white hover:bg-red-500 hover:border-red-500 focus:bg-red-500 focus:border-red-500 active:bg-red-500 active:border-red-500 active:shadow-lg focus:shadow-lg hover:shadow-lg shadow-md":
        type === "danger",
      "border w-full border-red-400 text-red-400 hover:bg-red-400 hover:text-white focus:bg-red-500 focus:border-red-500 active:bg-red-500 active:border-red-500 active:shadow-lg focus:shadow-lg hover:shadow-lg shadow-md":
        type === "outline-danger",
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
