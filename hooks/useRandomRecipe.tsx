import fetcher from "../lib/fetcher";
import useSWR, { useSWRConfig } from "swr";
import { IRecipe } from "../interfaces/Recipe.interface";

export const useRandomRecipe = () => {
  const { data, error, isValidating } = useSWR<IRecipe, Error>(
    "/api/recipes/random",
    fetcher
  );
  const { mutate } = useSWRConfig();

  const refetchData = () => {
    mutate("/api/recipes/random");
  };

  return { data, error, isValidating, refetchData };
};
