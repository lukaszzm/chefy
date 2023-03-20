import { ICategory } from "@/interfaces/Category.interface";
import { IArea } from "@/interfaces/Area.interface";

export const isItemChosen = (
  el: ICategory | IArea,
  list: ICategory[] | IArea[]
) => {
  for (let category of list) {
    if (category.id === el.id) return true;
  }

  return false;
};
