import classNames from "classnames";
import { Buttons } from "./Buttons";
import { Subtitle } from "@/ui/Subtitle";

interface IRecipeErrorProps {
  title: string;
  text: string;
  bgColor: "red" | "gray";
}

export const RecipeError: React.FC<IRecipeErrorProps> = (props) => {
  const { title, text, bgColor } = props;

  const styles = classNames(
    "flex justify-center items-center w-full h-full sm:min-h-[32rem] rounded-md font-medium text-gray-800 mb-6",
    {
      "bg-red-100": bgColor === "red",
      "bg-gray-200": bgColor === "gray",
    }
  );

  return (
    <>
      <div className={styles}>
        <div>
          <Subtitle className="text-center">{title} </Subtitle>
          <p className="text-center">{text}</p>
        </div>
      </div>
      <Buttons disabled />
    </>
  );
};
