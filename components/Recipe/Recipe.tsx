import { useState } from "react";
import { Ingredients } from "./Ingredients";
import { Instruction } from "./Instruction";
import { Buttons } from "./Buttons";
import { Category } from "./Category";
import { ImageContainer } from "./ImageContainer";
import { IRecipe } from "../../interfaces/Recipe.interface";
import { Title } from "../UI/Title";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";

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
    <Card>
      <ImageContainer src={imageSrc} alt={title} />
      <Title>{title}</Title>
      <div className="overflow-auto h-64 mb-2">
        <Category category={category.name} area={area.name} />
        <Ingredients
          shortVersion={isShortVersion}
          ingredientsList={ingredients}
        />
        <Instruction shortVersion={isShortVersion} instruction={instructions} />
        <Button
          type="none"
          onClick={() => setIsShortVersion(!isShortVersion)}
          className="font-semibold text-sm p-3 text-gray-700 bg-gray-100 rounded-3xl shadow-sm hover:bg-gray-200 hover:shadow-sm"
        >
          {isShortVersion ? "Read More" : "Read less"}
        </Button>
      </div>
      <Buttons
        isSubmitting={isSubmitting}
        onLikeClick={likeHandler}
        onCancelClick={cancelHandler}
      />
    </Card>
  );
};
