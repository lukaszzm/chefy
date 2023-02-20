import { Buttons } from "./Buttons";

export const RecipeNotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-96 bg-gray-100 rounded-md mb-5">
        <div>
          <h2 className="font-semibold text-lg m-0 p-0">
            No more recipes found.
          </h2>
          <p className="p-2 text-gray-700 text-base m-0">
            Change preferences to discover more recipes!
          </p>
        </div>
      </div>
      <Buttons isSubmitting />
    </>
  );
};
