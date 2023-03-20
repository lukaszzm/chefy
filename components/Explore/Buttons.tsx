import { BiHeart, BiX } from "react-icons/bi";
import { Button } from "@/ui/Button";

interface IButtonsProps {
  likeHandler?: () => void;
  dislikeHandler?: () => void;
  disabled?: boolean;
}

export const Buttons: React.FC<IButtonsProps> = (props) => {
  const { likeHandler, dislikeHandler, disabled } = props;
  return (
    <div className="w-full flex justify-around border-t border-t-gray mt-auto">
      <Button
        type="none"
        disabled={disabled}
        onClick={dislikeHandler}
        className="flex m-2 justify-center items-center w-20 h-20 font-semibold text-lg text-white bg-red-400 rounded-full shadow-sm hover:bg-red-500 disabled:opacity-40 disabled:hover:bg-red-400"
      >
        <BiX size="42px" height="1x" />
      </Button>
      <Button
        type="none"
        disabled={disabled}
        onClick={likeHandler}
        className="flex m-2 justify-center items-center w-20 h-20 font-semibold text-lg  text-white bg-green-400 rounded-full shadow-sm hover:bg-green-500 disabled:opacity-40 disabled:hover:bg-green-400"
      >
        <BiHeart size="32px" height="1x" />
      </Button>
    </div>
  );
};
