import { BiHeart, BiX } from "react-icons/bi";

interface IButtonsProps {
  onLikeClick: () => void;
  onCancelClick: () => void;
}
export const Buttons: React.FC<IButtonsProps> = (props) => {
  const { onLikeClick, onCancelClick } = props;
  return (
    <div className="flex w-full justify-around pt-2 border-t border-t-gray">
      <button
        onClick={onCancelClick}
        className="p-2 flex justify-center items-center w-20 h-20 font-semibold text-lg text-white bg-red-400 rounded-full shadow-sm hover:bg-red-500 transition duration-150  ease-in-out"
      >
        <BiX />
      </button>
      <button
        onClick={onLikeClick}
        className="p-2 flex justify-center items-center w-20 h-20 font-semibold text-lg  text-white bg-green-400 rounded-full shadow-sm hover:bg-green-500 transition duration-150  ease-in-out"
      >
        <BiHeart />
      </button>
    </div>
  );
};
