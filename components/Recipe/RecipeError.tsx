import { Card } from "../UI/Card";
import { Subtitle } from "../UI/Subtitle";
import { Buttons } from "./Buttons";

export const RecipeError = () => {
  return (
    <Card>
      <div className="flex justify-center items-center w-[24rem] h-[34rem] bg-red-100 rounded-md font-semibold text-gray-800 mb-5">
        <div>
          <Subtitle>Something went wrong. :( </Subtitle>
          <h3>Try again later.</h3>
        </div>
      </div>
      <Buttons disabled />
    </Card>
  );
};
