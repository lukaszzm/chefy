import { useState } from "react";
import { Ingredients } from "./Ingredients";
import { Instruction } from "./Instruction";
import { Buttons } from "./Buttons";
import { Category } from "./Category";
import { ImageContainer } from "./ImageContainer";

interface IRecipeProps {
  title: string;
  img: string;
  category: string;
  area: string;
  ingredientsList: string[];
  instructions: string;
}

export const Recipe: React.FC<IRecipeProps> = (props) => {
  const { title, img, category, area, ingredientsList, instructions } = props;
  const [isShortVersion, setIsShortVersion] = useState(true);

  const likeHandler = () => {
    console.log("LIKE");
  };

  const cancelHandler = () => {
    console.log("DONT LIKE");
  };

  return (
    <>
      <ImageContainer src={img} alt={title} />
      <h2 className="font-semibold text-2xl m-2">{title}</h2>
      <div className="overflow-auto max-h-96 mb-2">
        <Category category={category} area={area} />
        <Ingredients
          shortVersion={isShortVersion}
          ingredientsList={ingredientsList}
        />
        <Instruction shortVersion={isShortVersion} instruction={instructions} />
        <button
          onClick={() => setIsShortVersion(!isShortVersion)}
          className="p-2 font-semibold text-sm text-gray-700 bg-gray-100 px-10 rounded-3xl shadow-sm hover:bg-gray-200 hover:shadow-sm transition duration-150  ease-in-out"
        >
          {isShortVersion ? "Read More" : "Read less"}
        </button>
      </div>
      <Buttons onLikeClick={likeHandler} onCancelClick={cancelHandler} />
    </>
  );
};
