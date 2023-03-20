import { Buttons } from "./Buttons";

export const RecipeLoading = () => {
  return (
    <>
      <div className="h-full">
        <div className="w-full h-[25rem] bg-gray-200 animate-pulse rounded-md"></div>
        <div className="my-2 mx-auto w-60 h-10 bg-gray-200 animate-pulse rounded-md"></div>
        <div className="my-1 w-24 h-8 bg-gray-200 animate-pulse rounded-md"></div>
        <div className="my-2 m-auto w-24 h-8 bg-gray-200 animate-pulse rounded-md"></div>
      </div>
      <Buttons disabled />
    </>
  );
};
