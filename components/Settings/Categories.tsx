import { useForm } from "react-hook-form";
import { ICategory } from "../../interfaces/Category.interface";
import { isItemChosen } from "../../utils/isItemChosen";
import { Checkbox } from "../UI/Checkbox";
import { CheckboxesSchema } from "../../schemas/CheckboxesSchema";
import { yupResolver } from "@corex/hook-form-yup-resolver";

interface ICategoriesProps {
  allCategories: ICategory[];
  checkedByDefaultCategories: ICategory[];
}

export const Categories: React.FC<ICategoriesProps> = (props) => {
  const { allCategories, checkedByDefaultCategories } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm();

  const onSubmit = (values: any) => console.log(values);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left m-2 pb-2 border-b border-b-gray-200"
    >
      <label htmlFor="Category" className="p-2 font-semibold text-gray-700 ">
        Categories
      </label>
      <ul className="flex flex-wrap">
        {allCategories.map((el) => (
          <Checkbox
            {...register("checkboxes")}
            key={el.id}
            id={el.id}
            text={el.name}
            isCheckedByDefault={isItemChosen(el, checkedByDefaultCategories)}
          />
        ))}
      </ul>
      <button
        type="submit"
        className="disabled:transition-none disabled:opacity-60 disabled:hover:bg-primary w-full py-2.5 border-primary bg-primary text-white font-medium text-l my-2 leading-tight rounded shadow-md hover:bg-primary-hover hover:shadow-lg focus:bg-primary-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-hover active:shadow-lg transition duration-150 ease-in-out"
      >
        Save changes
      </button>
    </form>
  );
};
