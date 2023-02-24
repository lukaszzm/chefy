import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../UI/Button";

interface IMenuItemProps {
  icon: JSX.Element;
  text: string;
  type?: "button";
  isActive?: boolean;
  onClick?: () => void;
}

export const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { icon, text, type, isActive, onClick } = props;
  const router = useRouter();

  const style =
    router.pathname === `/${text}`
      ? "p-3 font-semibold text-lg text-primary bg-secondary my-3 mx-6 px-10 rounded-3xl shadow-sm flex justify-between items-center"
      : "p-3 font-semibold text-lg text-gray-400 my-3 mx-6 px-10 rounded-3xl hover:text-gray-700 hover:bg-gray-200 hover:shadow-sm transition duration-150  ease-in-out flex justify-between items-center";

  if (type === "button")
    return (
      <Button type="none" className={style} onClick={onClick}>
        {icon}
        <p className="capitalize">{text}</p>
      </Button>
    );

  return (
    <Link href={text} className={style}>
      {icon}
      <p className="capitalize">{text}</p>
    </Link>
  );
};
