import { useState } from "react";
import { IArea } from "../../interfaces/Area.interface";
import { IApiResponse } from "../../interfaces/ApiResponse";
import { useForm } from "react-hook-form";
import { Checkbox } from "../UI/Checkbox";
import { isItemChosen } from "../../utils/isItemChosen";
import { Alert } from "../UI/Alert";
import { Button } from "../UI/Button";
import { Label } from "../UI/Label";

interface IAreasProps {
  allAreas: IArea[];
  checkedByDefaultAreas: IArea[];
}

export const Areas: React.FC<IAreasProps> = (props) => {
  const { allAreas, checkedByDefaultAreas } = props;
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
      body: JSON.stringify({ prefferedAreas: values.items }),
    });

    if (!response.ok)
      return setApiResponse({ isError: true, text: "Something went wrong." });

    setApiResponse({
      isError: false,
      text: "Success! Your preferences has been changed.",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left m-2">
      <Label htmlFor="Category">Areas</Label>
      <ul className="flex flex-wrap">
        {allAreas.map((el) => (
          <Checkbox
            {...register("items")}
            key={el.id}
            id={el.id}
            text={el.name}
            isCheckedByDefault={isItemChosen(el, checkedByDefaultAreas)}
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
        className="p-4"
        disabled={!isDirty || isSubmitting}
      >
        Save
      </Button>
    </form>
  );
};
