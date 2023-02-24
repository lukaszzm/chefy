import { Subtitle } from "../UI/Subtitle";
import { Buttons } from "./Buttons";

export const RecipeNotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-96 bg-gray-100 rounded-md mb-5">
        <div>
          <Subtitle className="text-center">No more recipes found.</Subtitle>
          <p className="p-2 text-gray-700 text-base m-0">
            Change preferences to discover more recipes!
          </p>
        </div>
      </div>
      <Buttons isSubmitting />
    </>
  );
};
