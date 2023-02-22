import { isGeneratorFunction } from "util/types";
import { IArea } from "../../interfaces/Area.interface";
import { ICategory } from "../../interfaces/Category.interface";
import { CheckBox } from "../UI/Checkbox";

interface IPreferencesProps {
  allCategories: ICategory[];
  allAreas: IArea[];
  defaultCategories: ICategory[];
  defaultAreas: IArea[];
}

export const Preferences: React.FC<IPreferencesProps> = (props) => {
  const { allCategories, allAreas, defaultAreas, defaultCategories } = props;

  return (
    <form className="text-left m-2 pb-2 border-b border-b-gray-200">
      <label htmlFor="Category" className="p-2 font-semibold text-gray-700 ">
        Category
      </label>
      <ul className="flex flex-wrap">
        {allCategories.map((el) => (
          <CheckBox
            key={el.id}
            id={el.id}
            text={el.name}
            isDefaultChecked={isCategoryChosen(el, defaultCategories)}
          />
        ))}
      </ul>
    </form>
  );
};

const isCategoryChosen = (el: ICategory, list: ICategory[]) => {
  for (let category of list) {
    if (category.id === el.id) return true;
  }

  return false;
};
