import { IArea } from "./Area.interface";
import { ICategory } from "./Category.interface";

export interface IRecipe {
  id: string;
  title: string;
  imageSrc: string;
  ingredients: string[];
  instructions: string;
  category: ICategory;
  area: IArea;
}
