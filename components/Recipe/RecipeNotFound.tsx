import { Card } from "../UI/Card";
import { Subtitle } from "../UI/Subtitle";
import { Buttons } from "./Buttons";

export const RecipeNotFound = () => {
  return (
    <Card>
      <div className="flex justify-center items-center w-[24rem] h-[34rem] bg-gray-100 rounded-md mb-5">
        <div>
          <Subtitle className="text-center">No more recipes found.</Subtitle>
          <p className="p-2 text-gray-700 text-base m-0">
            Change preferences to discover more recipes!
          </p>
        </div>
      </div>
      <Buttons isSubmitting />
    </Card>
  );
};
