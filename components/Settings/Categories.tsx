import { useForm } from "react-hook-form";
import { ICategory } from "../../interfaces/Category.interface";
import { useState } from "react";
import { isItemChosen } from "../../utils/isItemChosen";
import { Checkbox } from "../UI/Checkbox";
import { IApiResponse } from "../../interfaces/ApiResponse";
import { Alert } from "../UI/Alert";
import { Button } from "../UI/Button";
import { Label } from "../UI/Label";

interface ICategoriesProps {
  allCategories: ICategory[];
  checkedByDefaultCategories: ICategory[];
}

export const Categories: React.FC<ICategoriesProps> = (props) => {
  const { allCategories, checkedByDefaultCategories } = props;
  const [apiResponse, setApiResponse] = useState<IApiResponse | null>();
  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useForm();

  const onSubmit = async (values: any) => {
    setApiResponse(null);
    const response = await fetch("/api/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prefferedCategories: values.items }),
    });

    if (!response.ok)
      return setApiResponse({ isError: true, text: "Something went wrong." });

    setApiResponse({
      isError: false,
      text: "Success! Your preferences has been changed.",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left m-2 pb-2 border-b border-b-gray-200"
    >
      <Label htmlFor="Category">Categories</Label>
      <ul className="flex flex-wrap">
        {allCategories.map((el) => (
          <Checkbox
            {...register("items")}
            key={el.id}
            id={el.id}
            text={el.name}
            isCheckedByDefault={isItemChosen(el, checkedByDefaultCategories)}
          />
        ))}
      </ul>
      {apiResponse && isDirty && (
        <Alert isError={apiResponse.isError} className="mt-2">
          {apiResponse.text}
        </Alert>
      )}
      <Button
        type="primary"
        className="disabled:transition-none disabled:opacity-60 disabled:hover:bg-primary w-full py-2.5 border-primary bg-primary text-white font-medium text-l my-2 leading-tight rounded shadow-md hover:bg-primary-hover hover:shadow-lg focus:bg-primary-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-hover active:shadow-lg transition duration-150 ease-in-out"
        disabled={!isDirty || isSubmitting}
      >
        Save changes
      </Button>
    </form>
  );
};
