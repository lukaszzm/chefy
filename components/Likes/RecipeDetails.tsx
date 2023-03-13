import { useState } from "react";
import { IApiResponse } from "../../interfaces/ApiResponse.interface";
import { Alert } from "../UI/Alert";
import { Subtitle } from "../UI/Subtitle";
import { Button } from "../UI/Button";
import { Tag } from "../UI/Tag";
import { generatePDF } from "../../utils/generatePDF";
import { useRouter } from "next/router";

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
  const { asPath } = router;

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

    if (!response.ok) {
      setApiResponse({ isError: true, text: "Something went wrong." });
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    router.replace(asPath);
  };

  return (
    <>
      <div className="overflow-auto h-96 px-2">
        <div>
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
        className="mt-6"
        onClick={() => generatePDF({ title, ingredients, instructions })}
      >
        Generate PDF
      </Button>
      {apiResponse && (
        <Alert isError={apiResponse.isError}>{apiResponse.text}</Alert>
      )}
      <Button
        isLoading={isSubmitting}
        onClick={deleteHandler}
        type="outline-danger"
        fullWidth
      >
        Delete from likes
      </Button>
    </>
  );
};
