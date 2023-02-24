import { BiHeart, BiX } from "react-icons/bi";
import { Button } from "../UI/Button";

interface IButtonsProps {
  onLikeClick?: () => void;
  onCancelClick?: () => void;
  isSubmitting: boolean;
}
export const Buttons: React.FC<IButtonsProps> = (props) => {
  const { onLikeClick, onCancelClick, isSubmitting } = props;
  return (
    <div className="flex w-full justify-around pt-2 border-t border-t-gray">
      <Button
        type="none"
        disabled={isSubmitting}
        onClick={onCancelClick}
        className="flex justify-center items-center w-20 h-20 font-semibold text-lg text-white bg-red-400 rounded-full shadow-sm hover:bg-red-500 disabled:opacity-40 disabled:hover:bg-red-400"
      >
        <BiX size="42px" height="1x" />
      </Button>
      <Button
        type="none"
        disabled={isSubmitting}
        onClick={onLikeClick}
        className="flex justify-center items-center w-20 h-20 font-semibold text-lg  text-white bg-green-400 rounded-full shadow-sm hover:bg-green-500 disabled:opacity-40 disabled:hover:bg-green-400"
      >
        <BiHeart size="32px" height="1x" />
      </Button>
    </div>
  );
};
