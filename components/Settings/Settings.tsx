import { IArea } from "../../interfaces/Area.interface";
import { ICategory } from "../../interfaces/Category.interface";
import { Subtitle } from "../UI/Subtitle";
import { Title } from "../UI/Title";
import { Account } from "./Account";
import { Password } from "./Password";
import { Preferences } from "./Preferences";

interface ISettingsProps {
  name: string;
  allAreas: IArea[];
  allCategories: ICategory[];
  defaultAreas: IArea[];
  defaultCategories: ICategory[];
}

export const Settings: React.FC<ISettingsProps> = (props) => {
  const { name, allAreas, allCategories, defaultAreas, defaultCategories } =
    props;

  return (
    <>
      <Title>Settings</Title>
      <div className="flex flex-col xl:flex-row max-w-5xl">
        <div className="w-full">
          <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
            <Subtitle>General Info</Subtitle>
            <Account name={name} />
          </div>
          <div className="p-4 m-4 my-8 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
            <Subtitle>Password</Subtitle>
            <Password />
          </div>
        </div>
        <div className="w-full">
          <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
            <Subtitle>Preferences</Subtitle>
            <Preferences
              allCategories={allCategories}
              allAreas={allAreas}
              defaultAreas={defaultAreas}
              defaultCategories={defaultCategories}
            />
          </div>
        </div>
      </div>
    </>
  );
};
