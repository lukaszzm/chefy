import Link from "next/link";
import { IconType } from "react-icons/lib/esm/iconBase";

interface IMenuItemProps {
  icon: JSX.Element;
  text: string;
  type?: "button";
  isActive?: boolean;
  onClick?: () => void;
}

export const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { icon, text, type, isActive, onClick } = props;
  const style = isActive
    ? "p-3 font-semibold text-lg text-primary bg-secondary my-3 mx-6 px-10 rounded-3xl shadow-sm flex justify-between items-center"
    : "p-3 font-semibold text-lg text-gray-400 my-3 mx-6 px-10 rounded-3xl hover:text-gray-700 hover:bg-gray-200 hover:shadow-sm transition duration-150  ease-in-out flex justify-between items-center";

  if (type === "button")
    return (
      <button className={style} onClick={onClick}>
        {icon}
        <p className="capitalize">{text}</p>
      </button>
    );

  return (
    <Link href={`dashboard/${text}`} className={style}>
      {icon}
      <p className="capitalize">{text}</p>
    </Link>
  );
};
