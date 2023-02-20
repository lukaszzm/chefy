interface IIngredientsProps {
  ingredientsList: string[];
  shortVersion?: boolean;
}

export const Ingredients: React.FC<IIngredientsProps> = (props) => {
  const { ingredientsList, shortVersion } = props;

  const fixedIngredientsList = shortVersion
    ? ingredientsList.slice(0, 3)
    : ingredientsList;

  if (shortVersion) fixedIngredientsList.push("And more");

  return (
    <>
      <h3 className="text-left font-semibold mt-2 mb-1 text-gray-900">
        Ingredients
      </h3>
      <div className="flex flex-row flex-wrap max-w-full">
        {fixedIngredientsList.map((el, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-50 border p-1 text-sm m-1 flex items-center justify-center"
          >
            {el}
          </div>
        ))}
      </div>
    </>
  );
};
