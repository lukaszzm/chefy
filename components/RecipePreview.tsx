import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export const RecipePreview = () => {
  const [recipe, setRecipe] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const getRecipe = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = response.data;
      console.log(data.meals[0]);
      setRecipe(data.meals[0]);
    } catch (err: unknown) {
      console.log(err);
      setError("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <Image
        src={recipe.strMealThumb}
        width="200"
        height="240"
        alt={recipe.strMeal}
        className="rounded-md shadow-sm border border-gray-200 self-center"
      />
      <h2 className="font-semibold text-2xl">{recipe.strMeal}</h2>
      <div>
        <h3 className="text-left font-semibold text-gray-900">Category</h3>
        <div className="flex justify-start">
          <div className="rounded-lg bg-blue-600 text-white border p-1 text-sm m-1 flex items-center justify-center">
            {recipe.strCategory}
          </div>
          <div className="rounded-lg bg-orange-600 border text-white p-1 text-sm m-1 flex items-center justify-center">
            {recipe.strArea}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-left font-semibold mt-2 mb-1 text-gray-900">
          Ingredients
        </h3>
        <div className="flex flex-row flex-wrap max-w-full">
          <div className="rounded-lg bg-gray-50 border p-1 text-sm m-1 flex items-center justify-center">
            {recipe.strIngredient1}
          </div>
          <div className="rounded-lg bg-gray-50 border p-1 text-sm m-1 flex items-center justify-center">
            {recipe.strIngredient2}
          </div>
          <div className="rounded-lg bg-gray-50 border p-1 text-sm m-1 flex items-center justify-center">
            {recipe.strIngredient3}
          </div>
          <div className="rounded-lg bg-gray-50 border p-1 text-sm m-1 flex items-center justify-center">
            {recipe.strIngredient4}
          </div>
        </div>
      </div>
    </div>
  );
};
