import { Buttons } from "./Buttons";

export const RecipeLoading = () => {
  return (
    <>
      <div className="w-2/3 m-auto sm:w-full h-[19rem] sm:h-[25rem] bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2.5 mx-auto w-36 h-10 bg-gray-200 animate-pulse rounded-md"></div>
      <div className=" w-16 h-6 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 w-24 h-8 bg-gray-200 animate-pulse rounded-md"></div>

      <div className="my-1 w-16 h-6 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 w-44 h-8 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 mb-7 w-full h-16 bg-gray-200 animate-pulse rounded-md"></div>
      <Buttons disabled />
    </>
  );
};
