import { useState } from "react";
import { Ingredients } from "./Ingredients";
import { Instruction } from "./Instruction";
import { Buttons } from "./Buttons";
import { Category } from "./Category";
import { ImageContainer } from "./ImageContainer";
import { IRecipe } from "../../interfaces/Recipe.interface";

interface IRecipeProps extends IRecipe {
  refetchRecipe: () => void;
}

export const Recipe: React.FC<IRecipeProps> = (props) => {
  const {
    id,
    title,
    imageSrc,
    category,
    area,
    ingredients,
    instructions,
    refetchRecipe,
  } = props;
  const [isShortVersion, setIsShortVersion] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const likeHandler = async () => {
    setIsSubmitting(true);
    const response = await fetch("/api/recipes/likes", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsSubmitting(false);
    if (response.ok) refetchRecipe();
  };

  const cancelHandler = async () => {
    setIsSubmitting(true);
    const response = await fetch("/api/recipes/dislikes", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsSubmitting(false);
    if (response.ok) refetchRecipe();
  };

  return (
    <>
      <ImageContainer src={imageSrc} alt={title} />
      <h2 className="font-semibold text-2xl m-2">{title}</h2>
      <div className="overflow-auto max-h-96 mb-2">
        <Category category={category.name} area={area.name} />
        <Ingredients
          shortVersion={isShortVersion}
          ingredientsList={ingredients}
        />
        <Instruction shortVersion={isShortVersion} instruction={instructions} />
        <button
          onClick={() => setIsShortVersion(!isShortVersion)}
          className="p-2 font-semibold text-sm text-gray-700 bg-gray-100 px-10 rounded-3xl shadow-sm hover:bg-gray-200 hover:shadow-sm transition duration-150  ease-in-out"
        >
          {isShortVersion ? "Read More" : "Read less"}
        </button>
      </div>
      <Buttons
        isSubmitting={isSubmitting}
        onLikeClick={likeHandler}
        onCancelClick={cancelHandler}
      />
    </>
  );
};
