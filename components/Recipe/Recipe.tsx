import { useState } from "react";
import { Ingredients } from "./Ingredients";
import { Instruction } from "./Instruction";
import { Buttons } from "./Buttons";
import { Category } from "./Category";
import { ResponsiveImage } from "../UI/ResponsiveImage";
import { IRecipe } from "../../interfaces/Recipe.interface";
import { Title } from "../UI/Title";
import { Button } from "../UI/Button";
import { Alert } from "../UI/Alert";
import { IApiResponse } from "../../interfaces/ApiResponse.interface";
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
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>(null);

  const likeHandler = async () => sendRequest("/api/recipes/likes");

  const dislikeHandler = () => sendRequest("/api/recipes/dislikes");

  const sendRequest = async (url: string) => {
    setIsSubmitting(true);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSubmitting(false);

    if (!response.ok)
      return setApiResponse({ isError: true, text: "Something went wrong." });

    refetchRecipe();
  };

  return (
    <>
      <div className="h-[calc(100vh-12rem)] sm:h-auto overflow-auto">
        <ResponsiveImage src={imageSrc} alt={title} />
        <Title>{title}</Title>
        <Category category={category.name} area={area.name} />
        {!isShortVersion && (
          <>
            <Ingredients
              shortVersion={isShortVersion}
              ingredientsList={ingredients}
            />
            <Instruction
              shortVersion={isShortVersion}
              instruction={instructions}
            />
          </>
        )}
        <Button
          type="none"
          onClick={() => setIsShortVersion(!isShortVersion)}
          className="font-semibold text-sm p-3 m-2 text-gray-700 bg-gray-100 rounded-3xl shadow-sm hover:bg-gray-200 hover:shadow-sm"
        >
          {isShortVersion ? "Read More" : "Read less"}
        </Button>
      </div>
      {apiResponse && <Alert isError={true}>{apiResponse.text}</Alert>}
      <Buttons
        disabled={isSubmitting}
        likeHandler={likeHandler}
        dislikeHandler={dislikeHandler}
      />
    </>
  );
};
