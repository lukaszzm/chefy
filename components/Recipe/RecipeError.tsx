import { Buttons } from "./Buttons";

export const RecipeError = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-96 bg-red-50 rounded-md font-semibold text-gray-600 mb-5">
        <div>
          <h2>Something went wrong. :( </h2>
          <h3>Try again later.</h3>
        </div>
      </div>
      <Buttons isSubmitting />
    </>
  );
};
