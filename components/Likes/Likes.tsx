import { IRecipe } from "../../interfaces/Recipe.interface";
import { Title } from "../UI/Title";
import { LikedRecipe } from "./LikedRecipe";
import { Pagination } from "./Pagination";

interface ILikesProps {
  recipes: IRecipe[];
  currentPage: number;
  pageCount: number;
}

export const Likes: React.FC<ILikesProps> = (props) => {
  const { recipes, pageCount, currentPage } = props;

  return (
    <>
      <Title className="mb-8">Your liked recipes</Title>
      {recipes.length > 0 ? (
        <>
          {recipes.map((el) => (
            <LikedRecipe
              key={el.id}
              id={el.id}
              title={el.title}
              area={el.area.name}
              category={el.category.name}
              ingredients={el.ingredients}
              instructions={el.instructions}
            />
          ))}
          <Pagination currentPage={currentPage} pageCount={pageCount} />
        </>
      ) : (
        <p className="font-semibold text-gray-500 my-auto">
          You don&apos;t have any recipes yet.
        </p>
      )}
    </>
  );
};
