import { useState } from "react";
import { IApiResponse } from "../../interfaces/ApiResponse";
import { Alert } from "../UI/Alert";
import { useRouter } from "next/router";
import { Subtitle } from "../UI/Subtitle";
import { Button } from "../UI/Button";

interface IRecipeDetailsProps {
  id: string;
  ingredients: string[];
  instructions: string;
}

export const RecipeDetails: React.FC<IRecipeDetailsProps> = (props) => {
  const { ingredients, instructions, id } = props;
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
      <div className="overflow-auto h-96">
        <div className="py-2 border-b-2 border-t-2">
          <Subtitle className="mb-1">Ingredients</Subtitle>
          <div className="flex flex-row flex-wrap max-w-full">
            {ingredients.map((el, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-50 border p-1 text-sm m-1 flex items-center justify-center"
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="text-left py-2 border-b-2">
          <Subtitle className="mb-1">Instructions</Subtitle>
          <div className="flex flex-row flex-wrap max-w-full">
            <p className="text-sm">{instructions}</p>
          </div>
        </div>
      </div>
      <Button type="primary" className="mt-3">
        Generate PDF
      </Button>
      {apiResponse && (
        <Alert isError={apiResponse.isError}>{apiResponse.text}</Alert>
      )}
      <Button
        disabled={isSubmitting}
        onClick={deleteHandler}
        type="outline-danger"
      >
        Delete from likes
      </Button>
    </>
  );
};
