import { Card } from "../UI/Card";
import { Buttons } from "./Buttons";

export const RecipeLoading = () => {
  return (
    <Card>
      <div className="w-full h-[25rem] bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2.5 mx-auto w-40 h-10 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="w-16 h-6 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-1 w-24 h-8 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="my-2 m-auto w-24 h-10 bg-gray-200 animate-pulse rounded-md"></div>
      <Buttons disabled />
    </Card>
  );
};
