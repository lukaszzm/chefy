import { Buttons } from "./Buttons";

export const RecipeLoading = () => {
  return (
    <>
      <div className="relative w-full h-60 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-3 mx-auto w-36 h-10 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 w-16 h-8 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 w-20 h-8 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 w-full h-24 bg-gray-200 animate-pulse rounded-md"></div>
      <Buttons isSubmitting />
    </>
  );
};
