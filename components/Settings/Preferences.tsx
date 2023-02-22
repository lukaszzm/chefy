import { IArea } from "../../interfaces/Area.interface";
import { ICategory } from "../../interfaces/Category.interface";
import { CheckBox } from "../UI/Checkbox";
import { isItemChosen } from "../../utils/isItemChosen";
import { Categories } from "./Categories";

interface IPreferencesProps {
  allCategories: ICategory[];
  allAreas: IArea[];
  defaultCategories: ICategory[];
  defaultAreas: IArea[];
}

export const Preferences: React.FC<IPreferencesProps> = (props) => {
  const { allCategories, allAreas, defaultAreas, defaultCategories } = props;

  return (
    <>
      <Categories
        allCategories={allCategories}
        checkedByDefaultCategories={defaultCategories}
      />
      {/* <form className="text-left m-2 pb-2 border-b border-b-gray-200">
        <label htmlFor="Category" className="p-2 font-semibold text-gray-700 ">
          Areas
        </label>
        <ul className="flex flex-wrap">
          {allAreas.map((el) => (
            <CheckBox
              key={el.id}
              id={el.id}
              text={el.name}
              isDefaultChecked={isItemChosen(el, defaultAreas)}
            />
          ))}
        </ul>
        <button
          type="submit"
          className="disabled:transition-none disabled:opacity-60 disabled:hover:bg-primary w-full py-2.5 border-primary bg-primary text-white font-medium text-l my-2 leading-tight rounded shadow-md hover:bg-primary-hover hover:shadow-lg focus:bg-primary-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-hover active:shadow-lg transition duration-150 ease-in-out"
        >
          Save changes
        </button>
      </form> */}
    </>
  );
};
