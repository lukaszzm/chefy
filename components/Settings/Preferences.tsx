import { all } from "axios";
import { IArea } from "../../interfaces/Area.interface";
import { ICategory } from "../../interfaces/Category.interface";
import { Areas } from "./Areas";
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
      <Areas allAreas={allAreas} checkedByDefaultAreas={defaultAreas} />
    </>
  );
};
