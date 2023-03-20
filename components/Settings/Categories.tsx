import { ICategory } from "../../interfaces/Category.interface";
import { isItemChosen } from "../../utils/isItemChosen";
import { Checkbox } from "../UI/Checkbox";
import { Alert } from "../UI/Alert";
import { Button } from "../UI/Button";
import { Label } from "../UI/Label";
import { useSettingsForm } from "../../hooks/useSettingsForm";

interface ICategoriesProps {
  allCategories: ICategory[];
  checkedByDefaultCategories: ICategory[];
}

export const Categories: React.FC<ICategoriesProps> = (props) => {
  const { allCategories, checkedByDefaultCategories } = props;
  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitting, errors },
    apiResponse,
    onSubmit,
  } = useSettingsForm({});

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left m-2 pb-2 border-b border-b-gray-200"
    >
      <Label htmlFor="Category">Categories</Label>
      <ul className="flex flex-wrap">
        {allCategories.map((el) => (
          <Checkbox
            {...register("prefferedCategories")}
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
        className="p-4 w-24"
        disabled={!isDirty}
        isLoading={isSubmitting}
      >
        Save
      </Button>
    </form>
  );
};
