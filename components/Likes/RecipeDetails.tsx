interface IRecipeDetailsProps {
  ingredients: string[];
  instructions: string;
}

export const RecipeDetails: React.FC<IRecipeDetailsProps> = (props) => {
  const { ingredients, instructions } = props;
  return (
    <>
      <div className="overflow-auto h-96">
        <div className="text-left py-2 border-b-2 border-t-2">
          <h2 className="font-semibold text-lg mb-1">Ingredients</h2>
          <div className="flex flex-row flex-wrap max-w-full">
            {ingredients.map((el, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-50 border p-1 text-sm m-1 flex items-center justify-center"
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="text-left py-2 border-b-2">
          <h2 className="font-semibold text-lg mb-1">Instructions</h2>
          <div className="flex flex-row flex-wrap max-w-full">
            <p className="text-sm">{instructions}</p>
          </div>
        </div>
      </div>
      <button className="w-full p-2 mt-4 mb-2 rounded-md shadow-md bg-primary text-white font-semibold hover:bg-primary-hover transition duration-150  ease-in-out">
        Generate PDF
      </button>
      <button className="w-full p-2 rounded-md shadow-md border border-red-400 text-red-400 font-semibold hover:bg-red-400 hover:text-white transition duration-150  ease-in-out">
        Delete from likes
      </button>
    </>
  );
};
