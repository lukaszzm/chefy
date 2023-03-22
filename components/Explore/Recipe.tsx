import { useState } from "react";
import { Ingredients } from "./Ingredients";
import { Instruction } from "./Instruction";
import { Buttons } from "./Buttons";
import { Category } from "./Category";
import { IApiResponse } from "@/interfaces/ApiResponse.interface";
import { IRecipe } from "@/interfaces/Recipe.interface";
import { Title } from "@/ui/Title";
import { Button } from "@/ui/Button";
import { Alert } from "@/ui/Alert";
import { ResponsiveImage } from "@/ui/ResponsiveImage";

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

  const likeHandler = async () => await sendRequest("/api/recipes/likes");

  const dislikeHandler = async () => await sendRequest("/api/recipes/dislikes");

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
      <div className="overflow-auto">
        <ResponsiveImage src={imageSrc} alt={title} />
        <Title>{title}</Title>
        <Category
          category={category.name}
          area={area.name}
          hideLabel={isShortVersion}
        />
        {!isShortVersion && (
          <>
            <Ingredients ingredientsList={ingredients} />
            <Instruction instruction={instructions} />
          </>
        )}
        <Button
          type="none"
          onClick={() => setIsShortVersion(!isShortVersion)}
          className="font-medium text-sm p-3 m-1 text-gray-700 bg-gray-100 rounded-3xl shadow-sm hover:bg-gray-200 hover:shadow-sm"
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
