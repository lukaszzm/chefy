import { useState } from "react";
import { IApiResponse } from "../../interfaces/ApiResponse";
import { Alert } from "../UI/Alert";
import { useRouter } from "next/router";
import { Subtitle } from "../UI/Subtitle";
import { Button } from "../UI/Button";
import { Tag } from "../UI/Tag";
import { generatePDF } from "../../utils/generatePDF";

interface IRecipeDetailsProps {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
}

export const RecipeDetails: React.FC<IRecipeDetailsProps> = (props) => {
  const { ingredients, instructions, id, title } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>();
  const router = useRouter();

  const deleteHandler = async () => {
    setApiResponse(null);
    setIsSubmitting(true);
    const response = await fetch("/api/recipes/likes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok)
      setApiResponse({ isError: true, text: "Something went wrong." });

    setIsSubmitting(false);
    router.reload();
  };

  return (
    <>
      <div className="overflow-auto h-96 p-2">
        <div className="pb-2 border-b-2">
          <Subtitle className="mb-1">Ingredients</Subtitle>
          <div className="flex flex-row flex-wrap max-w-full">
            {ingredients.map((el, index) => (
              <Tag key={index}>{el}</Tag>
            ))}
          </div>
        </div>
        <div className="text-left py-2 border-b-2">
          <Subtitle className="mb-1">Instructions</Subtitle>
          <div className="flex flex-row flex-wrap max-w-full">
            <p className="text-sm p-1">{instructions}</p>
          </div>
        </div>
      </div>
      <Button
        type="primary"
        fullWidth
        className="mt-3"
        onClick={() => generatePDF({ title, ingredients, instructions })}
      >
        Generate PDF
      </Button>
      {apiResponse && (
        <Alert isError={apiResponse.isError}>{apiResponse.text}</Alert>
      )}
      <Button
        disabled={isSubmitting}
        onClick={deleteHandler}
        type="outline-danger"
        fullWidth
      >
        Delete from likes
      </Button>
    </>
  );
};
