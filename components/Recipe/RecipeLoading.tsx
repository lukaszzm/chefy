import { Card } from "../UI/Card";
import { Buttons } from "./Buttons";

export const RecipeLoading = () => {
  return (
    <Card>
      <div className="h-[15rem] w-[24rem] bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2.5 mx-auto w-36 h-10 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-1 w-16 h-6 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 w-24 h-8 bg-gray-200 animate-pulse rounded-md"></div>

      <div className="my-1 w-16 h-6 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 w-44 h-8 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 mb-2 w-full h-28 bg-gray-200 animate-pulse rounded-md"></div>
      <Buttons disabled />
    </Card>
  );
};
