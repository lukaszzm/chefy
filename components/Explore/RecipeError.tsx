import { Subtitle } from "../UI/Subtitle";
import { Buttons } from "./Buttons";

export const RecipeError = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full sm:min-h-[32rem] bg-red-100 rounded-md font-semibold text-gray-800 mb-6">
        <div>
          <Subtitle>Something went wrong. </Subtitle>
          <h3>Try again later.</h3>
        </div>
      </div>
      <Buttons disabled />
    </>
  );
};
